"use strict";

// The words of every consent prompt (consent/user-confirmable-consents.js) in each of Kyro's ten languages.
//
// Until 25 Nov 2026 they were English for everyone: in a live Amharic voice run, "I'm very tired" opened a telehealth intake and the person was asked, in
// English, whether to save it. A person who does not read English cannot give informed consent to words they cannot understand, so the prompt is said in
// their language. What is being sent, to whom, and the person's own words (the message, the concern) are kept exactly as they are, inside quotation marks.
// Each prompt tells the person which word means yes and which means no in their language; the page accepts exactly those words (public/app.js,
// KYRO_CONFIRMATION_WORDS). Machine-drafted text (the owner, 25 Nov 2026: no native reviewers); the health safety sentences are general safety information
// only, the same as the English ones, which say Kyro does not diagnose.

const WORDS = Object.freeze({
  en: {
    generic: "I have that ready. Should I go ahead with it? Just say yes or no.",
    declined: "No problem, I have left that as it was.",
    call: ({ who, intro, message }) => `I can place a phone call to ${who}. A computer voice will first say "${intro}" and then "${message}". The call really happens and cannot be undone. Say yes to call, or no to cancel.`,
    kinds: { sms: "text message", whatsapp: "WhatsApp message", email: "email" },
    send: ({ kind, who, subject, message }) => `I can send this ${kind} to ${who}${subject ? `, subject "${subject}"` : ""}: "${message}". It will really be sent and cannot be unsent. Say yes to send it, or no to cancel.`,
    automation: ({ name, text }) => `I can send this to your automation "${name}": "${text}". It goes to the outside service you connected, and it cannot be unsent. Say yes to send it, or no to cancel.`,
    telehealth: ({ concern }) => `I can save this telehealth intake to your own health records${concern ? `: "${concern}"` : ""}. It is not shared with or sent to any provider. Say yes to consent and save it, or no to cancel.`,
    record: ({ lead, what }) => `${lead}I can save this to your own health records: ${what}. It stays in your records and is not shared with anyone. Say yes to consent and save it, or no to cancel.`,
    fallback: "this health information",
    reading: {
      bp: (s, d) => `blood pressure ${s} over ${d}`,
      glucoseMmol: (said, mg) => `blood sugar ${said} millimoles per litre (about ${mg} milligrams per decilitre)`,
      glucose: (v, mgdl) => `blood glucose ${v}${mgdl ? " milligrams per decilitre" : ""}`,
      oxygen: v => `oxygen saturation ${v} percent`, temperature: v => `temperature ${v}`, pulse: v => `pulse ${v}`
    },
    urgent: {
      bpUrgent: "This is a very high blood pressure. If you have chest pain, trouble breathing, a bad headache, weakness or numbness, confusion, trouble speaking or changes in your sight, get emergency help now: call your local emergency number or go to the nearest clinic. If you feel well, sit quietly for five minutes and measure again. ",
      bpLow: "This is lower than many people's usual reading. If you feel dizzy, faint or unwell, sit or lie down and get medical help. ",
      glucoseVeryLow: "This is a very low blood sugar. If you feel shaky, sweaty, confused, very sleepy or faint, get emergency help now: call your local emergency number or go to the nearest clinic, and do not be alone. ",
      glucoseLow: "This is lower than usual. If you feel shaky, sweaty, confused or faint, get help now and do not be alone, and contact your clinic today. ",
      glucoseVeryHigh: "This is a very high blood sugar. If you have vomiting, stomach pain, fast breathing, confusion, or you are very sleepy or very thirsty, get emergency help now: call your local emergency number or go to the nearest clinic. "
    }
  },
  sw: {
    generic: "Nimeandaa hilo. Niendelee nalo? Sema ndiyo au hapana tu.",
    declined: "Sawa, nimeiacha kama ilivyokuwa.",
    call: ({ who, intro, message }) => `Ninaweza kupiga simu kwa ${who}. Sauti ya kompyuta itasema kwanza "${intro}" kisha "${message}". Simu itapigwa kweli na haiwezi kutenduliwa. Sema ndiyo kupiga, au hapana kughairi.`,
    kinds: { sms: "ujumbe mfupi", whatsapp: "ujumbe wa WhatsApp", email: "barua pepe" },
    send: ({ kind, who, subject, message }) => `Ninaweza kutuma ${kind} kwa ${who}${subject ? `, kichwa "${subject}"` : ""}: "${message}". Itatumwa kweli na haiwezi kurudishwa. Sema ndiyo kuituma, au hapana kughairi.`,
    automation: ({ name, text }) => `Ninaweza kutuma hili kwa automation yako "${name}": "${text}". Linaenda kwa huduma ya nje uliyounganisha, na haliwezi kurudishwa. Sema ndiyo kulituma, au hapana kughairi.`,
    telehealth: ({ concern }) => `Ninaweza kuhifadhi taarifa hizi za telehealth kwenye rekodi zako za afya${concern ? `: "${concern}"` : ""}. Hazishirikiwi wala kutumwa kwa mtoa huduma yeyote. Sema ndiyo kukubali na kuzihifadhi, au hapana kughairi.`,
    record: ({ lead, what }) => `${lead}Ninaweza kuhifadhi hiki kwenye rekodi zako za afya: ${what}. Kinabaki kwenye rekodi zako na hakishirikiwi na mtu yeyote. Sema ndiyo kukubali na kukihifadhi, au hapana kughairi.`,
    fallback: "taarifa hii ya afya",
    reading: {
      bp: (s, d) => `shinikizo la damu ${s} juu ya ${d}`,
      glucoseMmol: (said, mg) => `sukari ya damu ${said} milimoli kwa lita (karibu miligramu ${mg} kwa desilita)`,
      glucose: (v, mgdl) => `sukari ya damu ${v}${mgdl ? " miligramu kwa desilita" : ""}`,
      oxygen: v => `kiwango cha oksijeni asilimia ${v}`, temperature: v => `joto la mwili ${v}`, pulse: v => `mapigo ya moyo ${v}`
    },
    urgent: {
      bpUrgent: "Hili ni shinikizo la damu la juu sana. Ukiwa na maumivu ya kifua, shida ya kupumua, maumivu makali ya kichwa, udhaifu au ganzi, kuchanganyikiwa, shida ya kuongea au mabadiliko ya kuona, tafuta msaada wa dharura sasa: piga namba ya dharura ya eneo lako au nenda kliniki iliyo karibu. Ukijisikia vizuri, kaa kimya kwa dakika tano kisha upime tena. ",
      bpLow: "Hiki ni kiwango cha chini kuliko kawaida ya watu wengi. Ukihisi kizunguzungu, kuzimia au kuumwa, kaa au lala chini na utafute msaada wa matibabu. ",
      glucoseVeryLow: "Hii ni sukari ya damu ya chini sana. Ukitetemeka, kutoka jasho, kuchanganyikiwa, kusinzia sana au kuhisi kuzimia, tafuta msaada wa dharura sasa: piga namba ya dharura ya eneo lako au nenda kliniki iliyo karibu, na usibaki peke yako. ",
      glucoseLow: "Hii ni ya chini kuliko kawaida. Ukitetemeka, kutoka jasho, kuchanganyikiwa au kuhisi kuzimia, tafuta msaada sasa na usibaki peke yako, na uwasiliane na kliniki yako leo. ",
      glucoseVeryHigh: "Hii ni sukari ya damu ya juu sana. Ukitapika, kuumwa tumbo, kupumua haraka, kuchanganyikiwa, au kusinzia sana au kuwa na kiu sana, tafuta msaada wa dharura sasa: piga namba ya dharura ya eneo lako au nenda kliniki iliyo karibu. "
    }
  },
  fr: {
    generic: "C'est prêt. Je continue ? Dites simplement oui ou non.",
    declined: "Pas de problème, je n'ai rien changé.",
    call: ({ who, intro, message }) => `Je peux appeler ${who}. Une voix d'ordinateur dira d'abord « ${intro} » puis « ${message} ». L'appel aura vraiment lieu et ne peut pas être annulé. Dites oui pour appeler, ou non pour annuler.`,
    kinds: { sms: "ce SMS", whatsapp: "ce message WhatsApp", email: "cet e-mail" },
    send: ({ kind, who, subject, message }) => `Je peux envoyer ${kind} à ${who}${subject ? `, objet « ${subject} »` : ""} : « ${message} ». Il sera vraiment envoyé et ne pourra pas être retiré. Dites oui pour l'envoyer, ou non pour annuler.`,
    automation: ({ name, text }) => `Je peux envoyer ceci à votre automatisation « ${name} » : « ${text} ». Cela part vers le service extérieur que vous avez connecté et ne peut pas être retiré. Dites oui pour l'envoyer, ou non pour annuler.`,
    telehealth: ({ concern }) => `Je peux enregistrer ce dossier de téléconsultation dans votre propre dossier de santé${concern ? ` : « ${concern} »` : ""}. Il n'est partagé avec aucun soignant ni envoyé à personne. Dites oui pour donner votre accord et l'enregistrer, ou non pour annuler.`,
    record: ({ lead, what }) => `${lead}Je peux enregistrer ceci dans votre propre dossier de santé : ${what}. Cela reste dans votre dossier et n'est partagé avec personne. Dites oui pour donner votre accord et l'enregistrer, ou non pour annuler.`,
    fallback: "cette information de santé",
    reading: {
      bp: (s, d) => `tension artérielle ${s} sur ${d}`,
      glucoseMmol: (said, mg) => `glycémie ${said} millimoles par litre (environ ${mg} milligrammes par décilitre)`,
      glucose: (v, mgdl) => `glycémie ${v}${mgdl ? " milligrammes par décilitre" : ""}`,
      oxygen: v => `saturation en oxygène ${v} pour cent`, temperature: v => `température ${v}`, pulse: v => `pouls ${v}`
    },
    urgent: {
      bpUrgent: "C'est une tension très élevée. Si vous avez une douleur à la poitrine, du mal à respirer, un fort mal de tête, une faiblesse ou un engourdissement, de la confusion, du mal à parler ou des troubles de la vue, demandez une aide d'urgence maintenant : appelez le numéro d'urgence local ou allez à la clinique la plus proche. Si vous vous sentez bien, restez assis au calme cinq minutes et mesurez de nouveau. ",
      bpLow: "C'est plus bas que la valeur habituelle de beaucoup de gens. Si vous avez des vertiges, vous sentez faible ou mal, asseyez-vous ou allongez-vous et demandez une aide médicale. ",
      glucoseVeryLow: "C'est une glycémie très basse. Si vous tremblez, transpirez, êtes confus, très somnolent ou sur le point de vous évanouir, demandez une aide d'urgence maintenant : appelez le numéro d'urgence local ou allez à la clinique la plus proche, et ne restez pas seul. ",
      glucoseLow: "C'est plus bas que d'habitude. Si vous tremblez, transpirez, êtes confus ou sur le point de vous évanouir, demandez de l'aide maintenant et ne restez pas seul, et contactez votre clinique aujourd'hui. ",
      glucoseVeryHigh: "C'est une glycémie très élevée. Si vous vomissez, avez mal au ventre, respirez vite, êtes confus, très somnolent ou très assoiffé, demandez une aide d'urgence maintenant : appelez le numéro d'urgence local ou allez à la clinique la plus proche. "
    }
  },
  es: {
    generic: "Ya está listo. ¿Sigo adelante? Solo diga sí o no.",
    declined: "No hay problema, lo dejé como estaba.",
    call: ({ who, intro, message }) => `Puedo llamar a ${who}. Una voz de computadora dirá primero "${intro}" y luego "${message}". La llamada se hace de verdad y no se puede deshacer. Diga sí para llamar, o no para cancelar.`,
    kinds: { sms: "este mensaje de texto", whatsapp: "este mensaje de WhatsApp", email: "este correo" },
    send: ({ kind, who, subject, message }) => `Puedo enviar ${kind} a ${who}${subject ? `, asunto "${subject}"` : ""}: "${message}". Se enviará de verdad y no se puede retirar. Diga sí para enviarlo, o no para cancelar.`,
    automation: ({ name, text }) => `Puedo enviar esto a su automatización "${name}": "${text}". Va al servicio externo que usted conectó y no se puede retirar. Diga sí para enviarlo, o no para cancelar.`,
    telehealth: ({ concern }) => `Puedo guardar este registro de telesalud en su propio historial de salud${concern ? `: "${concern}"` : ""}. No se comparte ni se envía a ningún proveedor. Diga sí para dar su consentimiento y guardarlo, o no para cancelar.`,
    record: ({ lead, what }) => `${lead}Puedo guardar esto en su propio historial de salud: ${what}. Se queda en su historial y no se comparte con nadie. Diga sí para dar su consentimiento y guardarlo, o no para cancelar.`,
    fallback: "esta información de salud",
    reading: {
      bp: (s, d) => `presión arterial ${s} sobre ${d}`,
      glucoseMmol: (said, mg) => `azúcar en sangre ${said} milimoles por litro (unos ${mg} miligramos por decilitro)`,
      glucose: (v, mgdl) => `glucosa ${v}${mgdl ? " miligramos por decilitro" : ""}`,
      oxygen: v => `saturación de oxígeno ${v} por ciento`, temperature: v => `temperatura ${v}`, pulse: v => `pulso ${v}`
    },
    urgent: {
      bpUrgent: "Esta es una presión muy alta. Si tiene dolor en el pecho, dificultad para respirar, un dolor de cabeza fuerte, debilidad o entumecimiento, confusión, dificultad para hablar o cambios en la vista, busque ayuda de emergencia ahora: llame al número de emergencias local o vaya a la clínica más cercana. Si se siente bien, siéntese tranquilo cinco minutos y vuelva a medir. ",
      bpLow: "Esto es más bajo que lo habitual para muchas personas. Si se siente mareado, a punto de desmayarse o mal, siéntese o acuéstese y busque ayuda médica. ",
      glucoseVeryLow: "Esta es un azúcar en sangre muy baja. Si tiembla, suda, está confundido, muy somnoliento o a punto de desmayarse, busque ayuda de emergencia ahora: llame al número de emergencias local o vaya a la clínica más cercana, y no se quede solo. ",
      glucoseLow: "Esto es más bajo de lo normal. Si tiembla, suda, está confundido o a punto de desmayarse, busque ayuda ahora y no se quede solo, y contacte a su clínica hoy. ",
      glucoseVeryHigh: "Esta es un azúcar en sangre muy alta. Si tiene vómitos, dolor de estómago, respiración rápida, confusión, o mucho sueño o mucha sed, busque ayuda de emergencia ahora: llame al número de emergencias local o vaya a la clínica más cercana. "
    }
  },
  pt: {
    generic: "Está pronto. Posso continuar? Diga apenas sim ou não.",
    declined: "Sem problema, deixei como estava.",
    call: ({ who, intro, message }) => `Posso ligar para ${who}. Uma voz de computador dirá primeiro "${intro}" e depois "${message}". A ligação acontece de verdade e não pode ser desfeita. Diga sim para ligar, ou não para cancelar.`,
    kinds: { sms: "esta mensagem de texto", whatsapp: "esta mensagem de WhatsApp", email: "este e-mail" },
    send: ({ kind, who, subject, message }) => `Posso enviar ${kind} para ${who}${subject ? `, assunto "${subject}"` : ""}: "${message}". Será enviado de verdade e não pode ser desfeito. Diga sim para enviar, ou não para cancelar.`,
    automation: ({ name, text }) => `Posso enviar isto para a sua automação "${name}": "${text}". Vai para o serviço externo que você conectou e não pode ser desfeito. Diga sim para enviar, ou não para cancelar.`,
    telehealth: ({ concern }) => `Posso guardar este registro de telessaúde no seu próprio histórico de saúde${concern ? `: "${concern}"` : ""}. Ele não é compartilhado nem enviado a nenhum profissional. Diga sim para consentir e guardar, ou não para cancelar.`,
    record: ({ lead, what }) => `${lead}Posso guardar isto no seu próprio histórico de saúde: ${what}. Fica no seu histórico e não é compartilhado com ninguém. Diga sim para consentir e guardar, ou não para cancelar.`,
    fallback: "esta informação de saúde",
    reading: {
      bp: (s, d) => `pressão arterial ${s} por ${d}`,
      glucoseMmol: (said, mg) => `açúcar no sangue ${said} milimoles por litro (cerca de ${mg} miligramas por decilitro)`,
      glucose: (v, mgdl) => `glicose ${v}${mgdl ? " miligramas por decilitro" : ""}`,
      oxygen: v => `saturação de oxigênio ${v} por cento`, temperature: v => `temperatura ${v}`, pulse: v => `pulso ${v}`
    },
    urgent: {
      bpUrgent: "Esta é uma pressão muito alta. Se tiver dor no peito, falta de ar, dor de cabeça forte, fraqueza ou dormência, confusão, dificuldade para falar ou alterações na visão, procure ajuda de emergência agora: ligue para o número de emergência local ou vá à clínica mais próxima. Se estiver bem, sente-se tranquilo por cinco minutos e meça de novo. ",
      bpLow: "Isto é mais baixo do que o habitual para muitas pessoas. Se sentir tontura, fraqueza ou mal-estar, sente-se ou deite-se e procure ajuda médica. ",
      glucoseVeryLow: "Este é um açúcar no sangue muito baixo. Se estiver tremendo, suando, confuso, com muito sono ou prestes a desmaiar, procure ajuda de emergência agora: ligue para o número de emergência local ou vá à clínica mais próxima, e não fique sozinho. ",
      glucoseLow: "Isto está mais baixo do que o normal. Se estiver tremendo, suando, confuso ou prestes a desmaiar, procure ajuda agora e não fique sozinho, e fale com a sua clínica hoje. ",
      glucoseVeryHigh: "Este é um açúcar no sangue muito alto. Se tiver vômitos, dor de barriga, respiração rápida, confusão, ou muito sono ou muita sede, procure ajuda de emergência agora: ligue para o número de emergência local ou vá à clínica mais próxima. "
    }
  },
  ar: {
    generic: "هذا جاهز. هل أتابع؟ قل نعم أو لا فقط.",
    declined: "لا مشكلة، تركت الأمر كما كان.",
    call: ({ who, intro, message }) => `يمكنني الاتصال بـ ${who}. سيقول صوت حاسوب أولًا "${intro}" ثم "${message}". سيتم الاتصال فعلًا ولا يمكن التراجع عنه. قل نعم للاتصال، أو لا للإلغاء.`,
    kinds: { sms: "هذه الرسالة النصية", whatsapp: "رسالة واتساب هذه", email: "هذا البريد الإلكتروني" },
    send: ({ kind, who, subject, message }) => `يمكنني إرسال ${kind} إلى ${who}${subject ? `، الموضوع "${subject}"` : ""}: "${message}". سيتم إرسالها فعلًا ولا يمكن استرجاعها. قل نعم لإرسالها، أو لا للإلغاء.`,
    automation: ({ name, text }) => `يمكنني إرسال هذا إلى الأتمتة الخاصة بك "${name}": "${text}". سيذهب إلى الخدمة الخارجية التي ربطتها ولا يمكن استرجاعه. قل نعم لإرساله، أو لا للإلغاء.`,
    telehealth: ({ concern }) => `يمكنني حفظ استمارة الرعاية الصحية عن بعد هذه في سجلاتك الصحية الخاصة${concern ? `: "${concern}"` : ""}. لا تتم مشاركتها مع أي مقدم رعاية ولا إرسالها إليه. قل نعم للموافقة وحفظها، أو لا للإلغاء.`,
    record: ({ lead, what }) => `${lead}يمكنني حفظ هذا في سجلاتك الصحية الخاصة: ${what}. يبقى في سجلاتك ولا تتم مشاركته مع أحد. قل نعم للموافقة وحفظه، أو لا للإلغاء.`,
    fallback: "هذه المعلومة الصحية",
    reading: {
      bp: (s, d) => `ضغط الدم ${s} على ${d}`,
      glucoseMmol: (said, mg) => `سكر الدم ${said} مليمول لكل لتر (حوالي ${mg} مليغرام لكل ديسيلتر)`,
      glucose: (v, mgdl) => `سكر الدم ${v}${mgdl ? " مليغرام لكل ديسيلتر" : ""}`,
      oxygen: v => `تشبع الأكسجين ${v} بالمئة`, temperature: v => `درجة الحرارة ${v}`, pulse: v => `النبض ${v}`
    },
    urgent: {
      bpUrgent: "هذا ضغط دم مرتفع جدًا. إذا كان لديك ألم في الصدر، أو صعوبة في التنفس، أو صداع شديد، أو ضعف أو خدر، أو ارتباك، أو صعوبة في الكلام، أو تغير في النظر، فاطلب المساعدة الطارئة الآن: اتصل برقم الطوارئ المحلي أو اذهب إلى أقرب عيادة. إذا كنت تشعر بأنك بخير، فاجلس بهدوء خمس دقائق ثم قس مرة أخرى. ",
      bpLow: "هذا أقل من القراءة المعتادة لدى كثير من الناس. إذا شعرت بدوار أو إغماء أو توعك، فاجلس أو استلق واطلب مساعدة طبية. ",
      glucoseVeryLow: "هذا سكر دم منخفض جدًا. إذا كنت ترتجف أو تتعرق أو مرتبكًا أو نعسانًا جدًا أو على وشك الإغماء، فاطلب المساعدة الطارئة الآن: اتصل برقم الطوارئ المحلي أو اذهب إلى أقرب عيادة، ولا تبق وحدك. ",
      glucoseLow: "هذا أقل من المعتاد. إذا كنت ترتجف أو تتعرق أو مرتبكًا أو على وشك الإغماء، فاطلب المساعدة الآن ولا تبق وحدك، وتواصل مع عيادتك اليوم. ",
      glucoseVeryHigh: "هذا سكر دم مرتفع جدًا. إذا كان لديك قيء أو ألم في البطن أو تنفس سريع أو ارتباك، أو كنت نعسانًا جدًا أو عطشانًا جدًا، فاطلب المساعدة الطارئة الآن: اتصل برقم الطوارئ المحلي أو اذهب إلى أقرب عيادة. "
    }
  },
  ha: {
    generic: "Na shirya wannan. In ci gaba? Ka ce eh ko a'a kawai.",
    declined: "Ba matsala, na bar shi yadda yake.",
    call: ({ who, intro, message }) => `Zan iya kiran ${who} ta waya. Muryar kwamfuta za ta fara cewa "${intro}" sannan "${message}". Kiran zai faru da gaske kuma ba za a iya janyewa ba. Ka ce eh don a kira, ko a'a don a soke.`,
    kinds: { sms: "saƙon tes ɗin nan", whatsapp: "saƙon WhatsApp ɗin nan", email: "imel ɗin nan" },
    send: ({ kind, who, subject, message }) => `Zan iya aika ${kind} zuwa ga ${who}${subject ? `, take "${subject}"` : ""}: "${message}". Za a aika shi da gaske kuma ba za a iya janyewa ba. Ka ce eh don a aika, ko a'a don a soke.`,
    automation: ({ name, text }) => `Zan iya aika wannan zuwa ga aikin atomatik ɗinka "${name}": "${text}". Zai tafi ga sabis na waje da ka haɗa, kuma ba za a iya janyewa ba. Ka ce eh don a aika, ko a'a don a soke.`,
    telehealth: ({ concern }) => `Zan iya ajiye wannan bayanin lafiya ta nesa a cikin bayanan lafiyarka${concern ? `: "${concern}"` : ""}. Ba a raba shi ko a aika shi ga wani likita ko mai bada sabis. Ka ce eh don ka amince a ajiye shi, ko a'a don a soke.`,
    record: ({ lead, what }) => `${lead}Zan iya ajiye wannan a cikin bayanan lafiyarka: ${what}. Zai zauna a bayananka kuma ba a raba shi da kowa. Ka ce eh don ka amince a ajiye shi, ko a'a don a soke.`,
    fallback: "wannan bayanin lafiya",
    reading: {
      bp: (s, d) => `hawan jini ${s} bisa ${d}`,
      glucoseMmol: (said, mg) => `sukarin jini ${said} milimol a kowace lita (kusan miligram ${mg} a kowace desilita)`,
      glucose: (v, mgdl) => `sukarin jini ${v}${mgdl ? " miligram a kowace desilita" : ""}`,
      oxygen: v => `iskar oksijin a jini kashi ${v} cikin ɗari`, temperature: v => `zafin jiki ${v}`, pulse: v => `bugun zuciya ${v}`
    },
    urgent: {
      bpUrgent: "Wannan hawan jini ne mai tsanani sosai. Idan kana jin ciwon ƙirji, wahalar numfashi, ciwon kai mai tsanani, rauni ko rashin ji a jiki, ruɗewa, wahalar magana ko canjin gani, nemi taimakon gaggawa yanzu: kira lambar gaggawa ta yankinka ko ka je asibiti mafi kusa. Idan kana jin lafiya, zauna shiru na minti biyar sannan ka sake auna. ",
      bpLow: "Wannan ya yi ƙasa da yadda yawancin mutane suke. Idan kana jin jiri, kamar za ka suma, ko rashin lafiya, zauna ko ka kwanta kuma ka nemi taimakon likita. ",
      glucoseVeryLow: "Wannan sukarin jini ne da ya yi ƙasa sosai. Idan kana rawar jiki, gumi, ruɗewa, barci mai yawa ko kamar za ka suma, nemi taimakon gaggawa yanzu: kira lambar gaggawa ta yankinka ko ka je asibiti mafi kusa, kuma kada ka zauna kai kaɗai. ",
      glucoseLow: "Wannan ya yi ƙasa da yadda aka saba. Idan kana rawar jiki, gumi, ruɗewa ko kamar za ka suma, nemi taimako yanzu kuma kada ka zauna kai kaɗai, sannan ka tuntuɓi asibitinka yau. ",
      glucoseVeryHigh: "Wannan sukarin jini ne da ya yi yawa sosai. Idan kana amai, ciwon ciki, numfashi da sauri, ruɗewa, ko barci mai yawa ko ƙishirwa mai yawa, nemi taimakon gaggawa yanzu: kira lambar gaggawa ta yankinka ko ka je asibiti mafi kusa. "
    }
  },
  am: {
    generic: "ይህ ዝግጁ ነው። ልቀጥል? አዎ ወይም አይ ብቻ ይበሉ።",
    declined: "ችግር የለም፣ እንደነበረ ተውኩት።",
    call: ({ who, intro, message }) => `ወደ ${who} ስልክ መደወል እችላለሁ። የኮምፒውተር ድምፅ መጀመሪያ "${intro}" ከዚያም "${message}" ይላል። ጥሪው በእርግጥ ይደረጋል፤ መመለስም አይቻልም። ለመደወል አዎ ይበሉ፣ ለመሰረዝ አይ ይበሉ።`,
    kinds: { sms: "ይህን የጽሑፍ መልእክት", whatsapp: "ይህን የWhatsApp መልእክት", email: "ይህን ኢሜይል" },
    send: ({ kind, who, subject, message }) => `${kind} ወደ ${who} መላክ እችላለሁ${subject ? `፣ ርዕስ "${subject}"` : ""}፦ "${message}"። በእርግጥ ይላካል፤ መመለስም አይቻልም። ለመላክ አዎ ይበሉ፣ ለመሰረዝ አይ ይበሉ።`,
    automation: ({ name, text }) => `ይህን ወደ "${name}" አውቶሜሽንዎ መላክ እችላለሁ፦ "${text}"። ወዳገናኙት የውጭ አገልግሎት ይሄዳል፤ መመለስም አይቻልም። ለመላክ አዎ ይበሉ፣ ለመሰረዝ አይ ይበሉ።`,
    telehealth: ({ concern }) => `ይህን የርቀት ሕክምና መረጃ በራስዎ የጤና መዝገብ ውስጥ ማስቀመጥ እችላለሁ${concern ? `፦ "${concern}"` : ""}። ለማንም የጤና ባለሙያ አይጋራም አይላክምም። ተስማምተው እንዲቀመጥ አዎ ይበሉ፣ ለመሰረዝ አይ ይበሉ።`,
    record: ({ lead, what }) => `${lead}ይህን በራስዎ የጤና መዝገብ ውስጥ ማስቀመጥ እችላለሁ፦ ${what}። በመዝገብዎ ውስጥ ይቆያል፤ ለማንም አይጋራም። ተስማምተው እንዲቀመጥ አዎ ይበሉ፣ ለመሰረዝ አይ ይበሉ።`,
    fallback: "ይህን የጤና መረጃ",
    reading: {
      bp: (s, d) => `የደም ግፊት ${s} በ${d}`,
      glucoseMmol: (said, mg) => `የደም ስኳር ${said} ሚሊሞል በሊትር (በግምት ${mg} ሚሊግራም በዴሲሊትር)`,
      glucose: (v, mgdl) => `የደም ስኳር ${v}${mgdl ? " ሚሊግራም በዴሲሊትር" : ""}`,
      oxygen: v => `የኦክስጅን መጠን ${v} በመቶ`, temperature: v => `የሰውነት ሙቀት ${v}`, pulse: v => `የልብ ምት ${v}`
    },
    urgent: {
      bpUrgent: "ይህ በጣም ከፍተኛ የደም ግፊት ነው። የደረት ሕመም፣ የመተንፈስ ችግር፣ ከባድ ራስ ምታት፣ የሰውነት መድከም ወይም መደንዘዝ፣ ግራ መጋባት፣ የመናገር ችግር ወይም የዕይታ ለውጥ ካለብዎ አሁኑኑ የአደጋ ጊዜ እርዳታ ይፈልጉ፦ የአካባቢዎን የአደጋ ጊዜ ቁጥር ይደውሉ ወይም በአቅራቢያ ወዳለ ክሊኒክ ይሂዱ። ደህና ከተሰማዎት ለአምስት ደቂቃ በጸጥታ ተቀምጠው እንደገና ይለኩ። ",
      bpLow: "ይህ ከብዙ ሰዎች የተለመደ መጠን ያነሰ ነው። የማዞር፣ የመዝለፍለፍ ወይም የሕመም ስሜት ካለዎት ይቀመጡ ወይም ይተኙ፣ የሕክምና እርዳታም ይፈልጉ። ",
      glucoseVeryLow: "ይህ በጣም ዝቅተኛ የደም ስኳር ነው። መንቀጥቀጥ፣ ላብ፣ ግራ መጋባት፣ ከፍተኛ እንቅልፍ ወይም የመዝለፍለፍ ስሜት ካለዎት አሁኑኑ የአደጋ ጊዜ እርዳታ ይፈልጉ፦ የአካባቢዎን የአደጋ ጊዜ ቁጥር ይደውሉ ወይም በአቅራቢያ ወዳለ ክሊኒክ ይሂዱ፤ ብቻዎን አይሁኑ። ",
      glucoseLow: "ይህ ከተለመደው ያነሰ ነው። መንቀጥቀጥ፣ ላብ፣ ግራ መጋባት ወይም የመዝለፍለፍ ስሜት ካለዎት አሁኑኑ እርዳታ ይፈልጉ፤ ብቻዎን አይሁኑ፤ ዛሬውኑ ክሊኒክዎን ያነጋግሩ። ",
      glucoseVeryHigh: "ይህ በጣም ከፍተኛ የደም ስኳር ነው። ማስታወክ፣ የሆድ ሕመም፣ ፈጣን አተነፋፈስ፣ ግራ መጋባት፣ ወይም ከፍተኛ እንቅልፍ ወይም ጥማት ካለዎት አሁኑኑ የአደጋ ጊዜ እርዳታ ይፈልጉ፦ የአካባቢዎን የአደጋ ጊዜ ቁጥር ይደውሉ ወይም በአቅራቢያ ወዳለ ክሊኒክ ይሂዱ። "
    }
  },
  yo: {
    generic: "Mo ti ṣètò rẹ̀. Ṣé kí n tẹ̀síwájú? Kan sọ bẹ́ẹ̀ni tàbí rárá.",
    declined: "Kò sí wàhálà, mo fi sílẹ̀ bí ó ṣe wà.",
    call: ({ who, intro, message }) => `Mo lè pe ${who} lórí fóònù. Ohùn kọ̀ǹpútà yóò kọ́kọ́ sọ "${intro}" lẹ́yìn náà "${message}". Ìpè náà yóò wáyé ní tòótọ́, a kò sì lè dá a padà. Sọ bẹ́ẹ̀ni láti pè, tàbí rárá láti fagilé.`,
    kinds: { sms: "ọ̀rọ̀ àtẹ̀jíṣẹ́ yìí", whatsapp: "ọ̀rọ̀ WhatsApp yìí", email: "ímeèlì yìí" },
    send: ({ kind, who, subject, message }) => `Mo lè fi ${kind} ránṣẹ́ sí ${who}${subject ? `, àkòrí "${subject}"` : ""}: "${message}". Yóò lọ ní tòótọ́, a kò sì lè dá a padà. Sọ bẹ́ẹ̀ni láti fi ránṣẹ́, tàbí rárá láti fagilé.`,
    automation: ({ name, text }) => `Mo lè fi èyí ránṣẹ́ sí iṣẹ́ aládàáṣe rẹ "${name}": "${text}". Yóò lọ sí iṣẹ́ ìta tí o so pọ̀, a kò sì lè dá a padà. Sọ bẹ́ẹ̀ni láti fi ránṣẹ́, tàbí rárá láti fagilé.`,
    telehealth: ({ concern }) => `Mo lè fi àkọsílẹ̀ ìtọ́jú láti ọ̀nà jíjìn yìí pamọ́ sínú àkọsílẹ̀ ìlera rẹ${concern ? `: "${concern}"` : ""}. A kò ní pín in tàbí fi ránṣẹ́ sí olùpèsè ìtọ́jú kankan. Sọ bẹ́ẹ̀ni láti gbà kí a fi pamọ́, tàbí rárá láti fagilé.`,
    record: ({ lead, what }) => `${lead}Mo lè fi èyí pamọ́ sínú àkọsílẹ̀ ìlera rẹ: ${what}. Yóò wà nínú àkọsílẹ̀ rẹ, a kò sì ní pín in pẹ̀lú ẹnikẹ́ni. Sọ bẹ́ẹ̀ni láti gbà kí a fi pamọ́, tàbí rárá láti fagilé.`,
    fallback: "ìsọfúnni ìlera yìí",
    reading: {
      bp: (s, d) => `ìfúnpá ẹ̀jẹ̀ ${s} lórí ${d}`,
      glucoseMmol: (said, mg) => `ṣúgà ẹ̀jẹ̀ ${said} milimoolu nínú lítà kan (bíi miligiraamu ${mg} nínú desilítà kan)`,
      glucose: (v, mgdl) => `ṣúgà ẹ̀jẹ̀ ${v}${mgdl ? " miligiraamu nínú desilítà kan" : ""}`,
      oxygen: v => `ìpele oxygen nínú ẹ̀jẹ̀ ìdá ${v} nínú ọgọ́rùn-ún`, temperature: v => `ìwọ̀n ooru ara ${v}`, pulse: v => `ìlù ọkàn ${v}`
    },
    urgent: {
      bpUrgent: "Ìfúnpá ẹ̀jẹ̀ yìí ga jù. Tí o bá ní ìrora àyà, ìṣòro mímí, orí fífọ́ tó le, àìlágbára tàbí ara kíku, ìdàrúdàpọ̀ ọkàn, ìṣòro sísọ̀rọ̀ tàbí àyípadà ríran, wá ìrànlọ́wọ́ pàjáwìrì báyìí: pe nọ́ńbà pàjáwìrì agbègbè rẹ tàbí lọ sí ilé ìwòsàn tó sún mọ́ ọ jù. Tí ara rẹ bá yá, jókòó jẹ́ẹ́ fún ìṣẹ́jú márùn-ún kí o sì tún wọ̀n ọ́n. ",
      bpLow: "Èyí kéré ju ìwọ̀n tí ọ̀pọ̀ ènìyàn sábà máa ń ní. Tí òòyì bá ń kọ́ ọ, tí o bá fẹ́ dákú tàbí ara rẹ kò yá, jókòó tàbí dùbúlẹ̀ kí o sì wá ìrànlọ́wọ́ dókítà. ",
      glucoseVeryLow: "Ṣúgà ẹ̀jẹ̀ yìí kéré jù. Tí o bá ń gbọ̀n, ń làágùn, ọkàn rẹ dàrú, oorun ń kùn ọ́ púpọ̀ tàbí o fẹ́ dákú, wá ìrànlọ́wọ́ pàjáwìrì báyìí: pe nọ́ńbà pàjáwìrì agbègbè rẹ tàbí lọ sí ilé ìwòsàn tó sún mọ́ ọ jù, má sì dá wà. ",
      glucoseLow: "Èyí kéré ju bí ó ṣe máa ń rí. Tí o bá ń gbọ̀n, ń làágùn, ọkàn rẹ dàrú tàbí o fẹ́ dákú, wá ìrànlọ́wọ́ báyìí, má dá wà, kí o sì kàn sí ilé ìwòsàn rẹ lónìí. ",
      glucoseVeryHigh: "Ṣúgà ẹ̀jẹ̀ yìí ga jù. Tí o bá ń bì, inú ń run ọ́, ò ń mí kíákíá, ọkàn rẹ dàrú, tàbí oorun ń kùn ọ́ púpọ̀ tàbí òùngbẹ ń gbẹ ọ́ púpọ̀, wá ìrànlọ́wọ́ pàjáwìrì báyìí: pe nọ́ńbà pàjáwìrì agbègbè rẹ tàbí lọ sí ilé ìwòsàn tó sún mọ́ ọ jù. "
    }
  },
  ig: {
    generic: "Edoziela m ya. Ka m gaa n'ihu? Kwuo ee ma ọ bụ mba.",
    declined: "Ọ dịghị nsogbu, ahapụrụ m ya ka ọ dị.",
    call: ({ who, intro, message }) => `Enwere m ike ịkpọ ${who} n'ekwentị. Olu kọmputa ga-ebu ụzọ kwuo "${intro}", wee kwuo "${message}". A ga-akpọ oku ahụ n'ezie, a gaghị enwe ike ịkagbu ya. Kwuo ee ka m kpọọ, ma ọ bụ mba ka m kagbuo.`,
    kinds: { sms: "ozi ederede a", whatsapp: "ozi WhatsApp a", email: "ozi email a" },
    send: ({ kind, who, subject, message }) => `Enwere m ike iziga ${kind} nye ${who}${subject ? `, isiokwu "${subject}"` : ""}: "${message}". A ga-eziga ya n'ezie, a gaghị enwe ike iweghachi ya. Kwuo ee ka m ziga ya, ma ọ bụ mba ka m kagbuo.`,
    automation: ({ name, text }) => `Enwere m ike iziga nke a na akpaaka gị "${name}": "${text}". Ọ ga-aga n'ọrụ mpụga i jikọrọ, a gaghị enwe ike iweghachi ya. Kwuo ee ka m ziga ya, ma ọ bụ mba ka m kagbuo.`,
    telehealth: ({ concern }) => `Enwere m ike ichekwa ozi nlekọta ahụike site n'ebe dị anya a n'ime ndekọ ahụike gị${concern ? `: "${concern}"` : ""}. A gaghị ekere ya ma ọ bụ ziga ya onye na-enye ọgwụ ọ bụla. Kwuo ee ka i kwenye ka m chekwaa ya, ma ọ bụ mba ka m kagbuo.`,
    record: ({ lead, what }) => `${lead}Enwere m ike ichekwa nke a n'ime ndekọ ahụike gị: ${what}. Ọ ga-anọ na ndekọ gị, a gaghị ekere ya na onye ọ bụla. Kwuo ee ka i kwenye ka m chekwaa ya, ma ọ bụ mba ka m kagbuo.`,
    fallback: "ozi ahụike a",
    reading: {
      bp: (s, d) => `ọbara mgbali ${s} n'elu ${d}`,
      glucoseMmol: (said, mg) => `shuga ọbara ${said} milimol kwa lita (ihe dị ka miligram ${mg} kwa desilita)`,
      glucose: (v, mgdl) => `shuga ọbara ${v}${mgdl ? " miligram kwa desilita" : ""}`,
      oxygen: v => `oxygen n'ọbara pasent ${v}`, temperature: v => `okpomọkụ ahụ ${v}`, pulse: v => `ọkụkụ obi ${v}`
    },
    urgent: {
      bpUrgent: "Nke a bụ ọbara mgbali dị elu nke ukwuu. Ọ bụrụ na obi na-afụ gị ụfụ, ọ na-esiri gị ike iku ume, isi ọwụwa siri ike, ike ọgwụgwụ ma ọ bụ ahụ ịnwụ, mgbagwoju anya, nsogbu ikwu okwu ma ọ bụ mgbanwe n'ịhụ ụzọ, chọọ enyemaka mberede ugbu a: kpọọ nọmba mberede mpaghara gị ma ọ bụ gaa ụlọọgwụ kacha nso. Ọ bụrụ na ahụ dị gị mma, nọdụ ala nwayọ nkeji ise, wee tụọ ọzọ. ",
      bpLow: "Nke a dị ala karịa ihe ọtụtụ mmadụ na-enwekarị. Ọ bụrụ na isi na-agba gị gburugburu, ị na-achọ ịda mbà ma ọ bụ ahụ adịghị gị mma, nọdụ ala ma ọ bụ dinaa ala, chọọ enyemaka dọkịta. ",
      glucoseVeryLow: "Nke a bụ shuga ọbara dị ala nke ukwuu. Ọ bụrụ na ị na-ama jijiji, na-ekpo ọsụsọ, mgbagwoju anya, ụra na-atụ gị nke ukwuu ma ọ bụ ị na-achọ ịda mbà, chọọ enyemaka mberede ugbu a: kpọọ nọmba mberede mpaghara gị ma ọ bụ gaa ụlọọgwụ kacha nso, ka ị ghara ịnọ naanị gị. ",
      glucoseLow: "Nke a dị ala karịa ka ọ na-adị. Ọ bụrụ na ị na-ama jijiji, na-ekpo ọsụsọ, mgbagwoju anya ma ọ bụ ị na-achọ ịda mbà, chọọ enyemaka ugbu a, ka ị ghara ịnọ naanị gị, kpọtụrụ ụlọọgwụ gị taa. ",
      glucoseVeryHigh: "Nke a bụ shuga ọbara dị elu nke ukwuu. Ọ bụrụ na ị na-agbọ agbọ, afọ na-afụ gị ụfụ, ị na-eku ume ngwa ngwa, mgbagwoju anya, ma ọ bụ ụra na-atụ gị nke ukwuu ma ọ bụ akpịrị ịkpọ nkụ nke ukwuu, chọọ enyemaka mberede ugbu a: kpọọ nọmba mberede mpaghara gị ma ọ bụ gaa ụlọọgwụ kacha nso. "
    }
  }
});

// "ha", "ha-NG", "HA" -> "ha"; anything Kyro does not speak -> "en".
function consentLanguage(value) {
  const code = String(value || "en").trim().toLowerCase().replace("_", "-").split("-")[0];
  return Object.hasOwn(WORDS, code) ? code : "en";
}

function consentWords(value) { return WORDS[consentLanguage(value)]; }

module.exports = Object.freeze({ consentWords, consentLanguage, LANGUAGES: Object.freeze(Object.keys(WORDS)) });
