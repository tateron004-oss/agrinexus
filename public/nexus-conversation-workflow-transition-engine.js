"use strict";

(function initNexusConversationWorkflowTransitionEngine(globalScope) {
  const CONVERSATIONAL_STATES = Object.freeze({
    EXPLORING: "exploring",
    CONSIDERING: "considering",
    PREPARING: "preparing",
    ACTING: "acting",
    RETURNING: "returning_or_branching"
  });

  const HIGH_RISK_TERMS = /\b(send|call|dial|sms|whatsapp|telegram|email|schedule|book|pay|payment|buy|purchase|checkout|dispatch|launch|share location|delete|save this patient record|submit|apply for the job|refill|prescription)\b/i;
  const PREPARING_TERMS = /\b(turn this into|create|make|prepare|organize|build|draft|write|find|track|teach|checklist|briefing|guide|plan|summary|questions|resume|résumé|learning plan|field inspection|staff training|message draft)\b/i;
  const CONSIDERING_TERMS = /\b(which|what should|best option|would .* help|could .* help|compare|approach|recommend|should we|should i|put this into practice|process for this)\b/i;
  const RETURNING_TERMS = /\b(go back|return|pause this|continue the|close this|start something new|what were we discussing|switch back|resume)\b/i;
  const SOURCE_TERMS = /\b(sources?|citation|where did|supporting evidence|government sources|peer reviewed|newest source|compare the first two sources)\b/i;

  const WORKFLOW_REGISTRY = Object.freeze([
    {
      domain: "health",
      workflowId: "health.patient-risk-checklist",
      conversationalPurpose: "Turn a health explanation into a patient risk checklist for human review.",
      transitionSignals: ["patient risk checklist", "clinic checklist", "older adults", "diabetes", "blood pressure", "chronic care", "rpm", "rtm"],
      requiredContext: ["topic", "target population"],
      optionalContext: ["active sources", "condition", "care setting"],
      missingInformationQuestions: ["Who will use this checklist?", "Is this for education, intake, or provider review?"],
      safetyClass: "clinical_review_required",
      confirmationRequirements: ["explicit user acceptance before opening", "final confirmation before sending, saving, scheduling, or deleting"],
      providerRequirements: ["configured provider connection only for future handoff"],
      supportedVisualSurface: "compact checklist workspace inside conversation",
      supportedVoiceCommands: ["add transportation", "make this simpler", "show sources", "close the workflow"],
      structuredInputRequirements: ["private health details", "exact readings", "provider contact details"],
      possibleOutputs: ["risk checklist", "provider questions", "plain-language handout"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["human review before clinical use"],
      receiptBehavior: "receipt only after verified local preparation or configured provider outcome",
      cancellationBehavior: "cancel closes local workflow and clears pending confirmation",
      returnToConversationBehavior: "conversation remains visible and active"
    },
    {
      domain: "health",
      workflowId: "health.public-health-briefing",
      conversationalPurpose: "Turn health evidence into a public-health briefing with source and safety boundaries.",
      transitionSignals: ["public health briefing", "community outreach", "chw", "community health worker", "clinic briefing", "health briefing"],
      requiredContext: ["health topic", "audience"],
      optionalContext: ["active sources", "jurisdiction", "language", "outreach setting"],
      missingInformationQuestions: ["Who is the briefing for?", "Is this for education, outreach planning, or provider review?"],
      safetyClass: "clinical_review_required",
      confirmationRequirements: ["explicit user acceptance and confirmation before opening", "professional review before use in clinical outreach"],
      providerRequirements: ["verified health source or provider review for local clinical use"],
      supportedVisualSurface: "public-health briefing workspace inside conversation",
      supportedVoiceCommands: ["make it plain language", "show sources", "add community worker notes", "close the workflow"],
      structuredInputRequirements: ["jurisdiction", "audience", "source set"],
      possibleOutputs: ["briefing outline", "community talking points", "provider review questions"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["clinical or public-health review before deployment"],
      receiptBehavior: "local briefing receipt only",
      cancellationBehavior: "cancel clears briefing preparation",
      returnToConversationBehavior: "return to health conversation"
    },
    {
      domain: "health",
      workflowId: "health.heat-risk-response",
      conversationalPurpose: "Prepare a heat-risk response workflow for chronic-care support without diagnosis or dispatch.",
      transitionSignals: ["heat risk", "extreme heat", "older adults", "diabetes heat", "hypertension heat", "rpm reading", "rtm support"],
      requiredContext: ["risk topic", "target population"],
      optionalContext: ["symptoms", "care setting", "active sources", "local weather source"],
      missingInformationQuestions: ["Who is at risk?", "Do you want education, intake questions, or a provider-ready checklist?"],
      safetyClass: "clinical_review_required",
      confirmationRequirements: ["explicit user acceptance and confirmation before opening", "emergency language must route to local emergency guidance without dispatch"],
      providerRequirements: ["configured provider connection only for future clinical handoff"],
      supportedVisualSurface: "heat-risk response workspace",
      supportedVoiceCommands: ["add warning signs", "make caregiver version", "show sources", "close the workflow"],
      structuredInputRequirements: ["private readings", "symptoms", "provider contact details"],
      possibleOutputs: ["risk checklist", "caregiver handout", "provider-ready questions"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["human clinical review before action"],
      receiptBehavior: "local preparation receipt only",
      cancellationBehavior: "cancel heat-risk workflow",
      returnToConversationBehavior: "return to chronic-care discussion"
    },
    {
      domain: "health",
      workflowId: "health.provider-discovery-prep",
      conversationalPurpose: "Prepare provider or pharmacy discovery criteria without claiming live availability.",
      transitionSignals: ["find provider", "provider discovery", "clinic search", "pharmacy discovery", "nearby clinic", "telehealth provider"],
      requiredContext: ["support need"],
      optionalContext: ["location text", "provider type", "insurance", "language"],
      missingInformationQuestions: ["What type of provider do you need?", "What location text should I use without requesting device location?"],
      safetyClass: "provider_discovery_gated",
      confirmationRequirements: ["acceptance before opening", "confirmation before external search or provider contact"],
      providerRequirements: ["verified public directory or configured provider connector"],
      supportedVisualSurface: "provider discovery preparation workspace",
      supportedVoiceCommands: ["add language preference", "use typed location", "show missing connector", "close the workflow"],
      structuredInputRequirements: ["explicit location text", "provider specialty", "contact preference"],
      possibleOutputs: ["search criteria", "provider questions", "blocked connector status"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["directory/provider response before claiming availability"],
      receiptBehavior: "no provider-found receipt without verified source result",
      cancellationBehavior: "cancel provider discovery prep",
      returnToConversationBehavior: "return to health access conversation"
    },
    {
      domain: "pharmacy",
      workflowId: "pharmacy.counseling-guide",
      conversationalPurpose: "Prepare medication counseling or review questions without prescribing or refilling.",
      transitionSignals: ["medication", "pharmacy", "refill", "counseling", "several medications", "heat and medication"],
      requiredContext: ["topic"],
      optionalContext: ["medication class", "caregiver role", "active sources"],
      missingInformationQuestions: ["Is this for a patient question list or staff training?", "Do you want plain-language counseling points?"],
      safetyClass: "pharmacy_review_required",
      confirmationRequirements: ["explicit user acceptance before opening", "final confirmation before any future pharmacy communication"],
      providerRequirements: ["verified pharmacy connector for live refill or contact"],
      supportedVisualSurface: "pharmacy preparation workspace",
      supportedVoiceCommands: ["make it easier", "add caregiver note", "show sources", "close the workflow"],
      structuredInputRequirements: ["exact medication names", "dose details", "pharmacy contact details"],
      possibleOutputs: ["question list", "counseling guide", "staff training brief"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["pharmacist or clinician review"],
      receiptBehavior: "local preparation receipt only",
      cancellationBehavior: "cancel clears pharmacy preparation",
      returnToConversationBehavior: "continue conversation without losing topic"
    },
    {
      domain: "pharmacy",
      workflowId: "pharmacy.caregiver-handout",
      conversationalPurpose: "Create a caregiver medication question handout without medication changes.",
      transitionSignals: ["caregiver handout", "medication handout", "pharmacy questions", "pharmacist questions", "caregiver medication", "plain language medication"],
      requiredContext: ["pharmacy topic"],
      optionalContext: ["caregiver role", "condition", "active sources", "language"],
      missingInformationQuestions: ["Is this for a caregiver, patient, or staff member?", "Should it be plain-language or provider-facing?"],
      safetyClass: "pharmacy_review_required",
      confirmationRequirements: ["explicit user acceptance and confirmation before opening", "pharmacist or clinician review before clinical use"],
      providerRequirements: ["verified pharmacist/provider review for clinical recommendations"],
      supportedVisualSurface: "caregiver pharmacy handout workspace",
      supportedVoiceCommands: ["make it simpler", "add pharmacist questions", "show sources", "close the workflow"],
      structuredInputRequirements: ["exact medication names", "dose details", "patient-specific history"],
      possibleOutputs: ["caregiver handout", "question list", "safety reminder card"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["pharmacy review before patient-specific use"],
      receiptBehavior: "local handout receipt only",
      cancellationBehavior: "cancel handout preparation",
      returnToConversationBehavior: "return to pharmacy conversation"
    },
    {
      domain: "pharmacy",
      workflowId: "pharmacy.community-medication-outreach",
      conversationalPurpose: "Prepare a community medication outreach plan without refills, prescribing, or pharmacy contact.",
      transitionSignals: ["medication outreach", "pharmacy outreach", "community medication", "medication education plan", "refill support plan"],
      requiredContext: ["outreach purpose"],
      optionalContext: ["community setting", "language", "transport barrier", "active sources"],
      missingInformationQuestions: ["Who is the outreach for?", "Do you need education, transport planning, or pharmacist questions?"],
      safetyClass: "pharmacy_review_required",
      confirmationRequirements: ["acceptance before opening", "final confirmation and verified provider connector before any pharmacy contact"],
      providerRequirements: ["configured pharmacy connector for live contact or refill workflow"],
      supportedVisualSurface: "community medication outreach workspace",
      supportedVoiceCommands: ["add transport barrier", "make community worker version", "show blocked connector", "close the workflow"],
      structuredInputRequirements: ["recipient", "pharmacy details", "medication details"],
      possibleOutputs: ["outreach checklist", "pharmacist question set", "blocked refill/contact state"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["pharmacist/provider confirmation for live action"],
      receiptBehavior: "no refill or contact receipt without provider evidence",
      cancellationBehavior: "cancel outreach plan",
      returnToConversationBehavior: "return to pharmacy conversation"
    },
    {
      domain: "agriculture",
      workflowId: "agriculture.field-inspection-checklist",
      conversationalPurpose: "Turn crop concerns into an educational field inspection checklist.",
      transitionSignals: ["crop", "maize", "tomato", "yellow leaves", "field inspection", "pest", "disease", "soil", "irrigation", "farm"],
      requiredContext: ["crop or farm topic"],
      optionalContext: ["location", "symptoms", "weather", "active sources"],
      missingInformationQuestions: ["What crop or field are we discussing?", "Do you know the location or growth stage?"],
      safetyClass: "advisory_review_required",
      confirmationRequirements: ["explicit user acceptance before opening", "confirmation before any buyer, provider, drone, or route action"],
      providerRequirements: ["verified agriculture source or local expert for location-specific advice"],
      supportedVisualSurface: "field checklist workspace",
      supportedVoiceCommands: ["add soil", "add photos later", "make a field plan", "show sources", "close the workflow"],
      structuredInputRequirements: ["exact address", "field size", "crop stage", "photo description"],
      possibleOutputs: ["inspection checklist", "expert questions", "training plan"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["local expert confirmation for recommendations"],
      receiptBehavior: "local preparation receipt only",
      cancellationBehavior: "cancel closes checklist",
      returnToConversationBehavior: "return to crop conversation"
    },
    {
      domain: "agriculture",
      workflowId: "agriculture.source-backed-briefing",
      conversationalPurpose: "Create a source-backed agriculture briefing with local evidence limits clearly marked.",
      transitionSignals: ["source-backed agriculture briefing", "agriculture briefing", "extension sources", "crop evidence", "supporting sources"],
      requiredContext: ["agriculture topic"],
      optionalContext: ["crop", "country", "region", "active sources", "season"],
      missingInformationQuestions: ["What crop or agriculture topic should the briefing cover?", "What country or region should be treated as local context?"],
      safetyClass: "advisory_review_required",
      confirmationRequirements: ["explicit user acceptance before opening", "local expert confirmation before field-specific recommendations"],
      providerRequirements: ["verified extension, government, university, or research source"],
      supportedVisualSurface: "agriculture briefing workspace",
      supportedVoiceCommands: ["show source quality", "mark local limits", "make farmer version", "close the workflow"],
      structuredInputRequirements: ["country/region", "crop stage", "source list"],
      possibleOutputs: ["source-backed briefing", "farmer handout", "expert review questions"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["local expert/source confirmation for location-specific advice"],
      receiptBehavior: "local briefing receipt only",
      cancellationBehavior: "cancel agriculture briefing",
      returnToConversationBehavior: "return to crop conversation"
    },
    {
      domain: "agriculture",
      workflowId: "agriculture.local-expert-questions",
      conversationalPurpose: "Prepare questions for a local agriculture specialist without provider handoff.",
      transitionSignals: ["local agriculture specialist", "agronomist questions", "extension officer questions", "expert questions", "local expert"],
      requiredContext: ["crop or farm topic"],
      optionalContext: ["symptoms", "location text", "season", "farmer goal"],
      missingInformationQuestions: ["Which crop or livestock issue should the expert questions cover?", "What location text should be included if the farmer wants it?"],
      safetyClass: "advisory_review_required",
      confirmationRequirements: ["acceptance before opening", "confirmation and connector readiness before any specialist contact"],
      providerRequirements: ["verified local expert or extension connector for live handoff"],
      supportedVisualSurface: "local expert question workspace",
      supportedVoiceCommands: ["add symptom list", "make field version", "show blocked contact state", "close the workflow"],
      structuredInputRequirements: ["location text", "crop stage", "photos or observations"],
      possibleOutputs: ["expert question list", "field observation checklist", "blocked handoff status"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["verified expert response before claiming advice"],
      receiptBehavior: "no contact receipt without provider evidence",
      cancellationBehavior: "cancel expert question prep",
      returnToConversationBehavior: "return to agriculture conversation"
    },
    {
      domain: "agriculture",
      workflowId: "agriculture.delivery-planning",
      conversationalPurpose: "Prepare agriculture delivery or market-route planning without dispatch, buyer contact, or payment.",
      transitionSignals: ["agriculture delivery", "farm delivery", "market route", "trade route", "produce transport", "post-harvest delivery"],
      requiredContext: ["product or delivery goal"],
      optionalContext: ["origin", "destination", "quantity", "storage need"],
      missingInformationQuestions: ["What product or load is being planned?", "What origin and destination text should be used?"],
      safetyClass: "transaction_dispatch_gated",
      confirmationRequirements: ["acceptance before opening", "confirmation before route handoff, buyer contact, dispatch, or payment"],
      providerRequirements: ["configured maps/logistics/marketplace connectors for live execution"],
      supportedVisualSurface: "agriculture delivery planning workspace",
      supportedVoiceCommands: ["add cold chain", "add market questions", "show fallback route", "close the workflow"],
      structuredInputRequirements: ["origin", "destination", "quantity", "buyer/seller details"],
      possibleOutputs: ["delivery plan", "market route checklist", "buyer readiness questions"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["provider receipt for live route, dispatch, or marketplace action"],
      receiptBehavior: "local plan receipt only unless provider verifies execution",
      cancellationBehavior: "cancel agriculture delivery plan",
      returnToConversationBehavior: "return to agriculture or marketplace conversation"
    },
    {
      domain: "learning",
      workflowId: "learning.plan",
      conversationalPurpose: "Create a learning plan or training path from interests and goals.",
      transitionSignals: ["learn", "training", "teach", "course", "literacy", "study", "certificate"],
      requiredContext: ["learning goal"],
      optionalContext: ["language", "literacy level", "device access", "schedule"],
      missingInformationQuestions: ["What do you want to learn first?", "How much time can you study each week?"],
      safetyClass: "low_risk_prepare",
      confirmationRequirements: ["acceptance before opening plan", "confirmation before enrollment"],
      providerRequirements: ["configured LMS provider for live enrollment"],
      supportedVisualSurface: "learning plan workspace",
      supportedVoiceCommands: ["make it simpler", "translate", "add job skills", "close the workflow"],
      structuredInputRequirements: ["exact course, school, or account details"],
      possibleOutputs: ["learning plan", "literacy support steps", "training search packet"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["provider response for live enrollment"],
      receiptBehavior: "local plan receipt only",
      cancellationBehavior: "cancel local plan",
      returnToConversationBehavior: "return to learning discussion"
    },
    {
      domain: "learning",
      workflowId: "learning.literacy-support-path",
      conversationalPurpose: "Turn a learning need into a low-literacy, language-aware support path.",
      transitionSignals: ["literacy support", "low literacy", "reading help", "language support", "study support", "help me learn in"],
      requiredContext: ["learning need"],
      optionalContext: ["language", "reading level", "device access", "offline need"],
      missingInformationQuestions: ["What language should Nexus use?", "Should this be voice-first, picture-supported, or text-supported?"],
      safetyClass: "education_prepare",
      confirmationRequirements: ["acceptance and confirmation before opening", "confirmation before any future enrollment or provider handoff"],
      providerRequirements: ["configured LMS or training provider for live enrollment"],
      supportedVisualSurface: "literacy support workspace",
      supportedVoiceCommands: ["make it easier", "translate", "use voice-first", "close the workflow"],
      structuredInputRequirements: ["learner age", "language preference", "access needs"],
      possibleOutputs: ["literacy support steps", "language support plan", "offline learning checklist"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["provider receipt for live enrollment or certification"],
      receiptBehavior: "local literacy plan receipt only",
      cancellationBehavior: "cancel literacy support path",
      returnToConversationBehavior: "return to learning conversation"
    },
    {
      domain: "learning",
      workflowId: "learning.training-provider-questions",
      conversationalPurpose: "Prepare questions for a training provider without enrolling the learner.",
      transitionSignals: ["training provider questions", "course provider", "school questions", "training enrollment questions", "certificate questions"],
      requiredContext: ["training goal"],
      optionalContext: ["program name", "location", "cost", "credential"],
      missingInformationQuestions: ["What training program or skill are you considering?", "Do you need cost, schedule, language, or certificate questions?"],
      safetyClass: "education_provider_gated",
      confirmationRequirements: ["acceptance and confirmation before opening", "final confirmation and provider readiness before enrollment or provider contact"],
      providerRequirements: ["verified training provider or LMS connector for live enrollment/contact"],
      supportedVisualSurface: "training provider question workspace",
      supportedVoiceCommands: ["add cost questions", "add schedule questions", "show blocked enrollment state", "close the workflow"],
      structuredInputRequirements: ["program", "provider", "learner details", "contact details"],
      possibleOutputs: ["provider question list", "enrollment readiness checklist", "blocked provider status"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["provider confirmation before claiming enrollment"],
      receiptBehavior: "no enrollment receipt without provider evidence",
      cancellationBehavior: "cancel training provider prep",
      returnToConversationBehavior: "return to learning discussion"
    },
    {
      domain: "workforce",
      workflowId: "workforce.application-prep",
      conversationalPurpose: "Prepare job search, resume, interview, or application materials.",
      transitionSignals: ["job", "work", "career", "resume", "résumé", "application", "interview", "employer"],
      requiredContext: ["work goal"],
      optionalContext: ["skills", "experience", "location", "training"],
      missingInformationQuestions: ["What kind of work are you looking for?", "Do you want resume help or job options first?"],
      safetyClass: "employment_prepare",
      confirmationRequirements: ["acceptance before opening", "final confirmation before application submission"],
      providerRequirements: ["verified employer or job connector for live applications"],
      supportedVisualSurface: "workforce preparation workspace",
      supportedVoiceCommands: ["improve my resume", "make it professional", "find training", "close the workflow"],
      structuredInputRequirements: ["resume content", "contact information", "application fields"],
      possibleOutputs: ["resume outline", "job search plan", "application checklist"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["confirmed employer/provider response for live submission"],
      receiptBehavior: "receipt only for local prep or verified submission",
      cancellationBehavior: "cancel local job workflow",
      returnToConversationBehavior: "return to career conversation"
    },
    {
      domain: "workforce",
      workflowId: "workforce.interview-coaching",
      conversationalPurpose: "Turn job goals into interview coaching and practice questions without applying.",
      transitionSignals: ["interview coaching", "interview practice", "practice interview", "job interview", "prepare for interview"],
      requiredContext: ["job target"],
      optionalContext: ["skills", "experience", "language", "confidence need"],
      missingInformationQuestions: ["What job or role is the interview for?", "Do you want practice questions, answers, or confidence coaching?"],
      safetyClass: "employment_prepare",
      confirmationRequirements: ["acceptance and confirmation before opening", "confirmation before any employer contact or application submission"],
      providerRequirements: ["verified employer/job connector for live applications or scheduling"],
      supportedVisualSurface: "interview coaching workspace",
      supportedVoiceCommands: ["ask me a practice question", "make answer stronger", "translate", "close the workflow"],
      structuredInputRequirements: ["job title", "resume details", "employer details"],
      possibleOutputs: ["practice questions", "answer outline", "confidence checklist"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["employer/provider evidence for any live action"],
      receiptBehavior: "local coaching receipt only",
      cancellationBehavior: "cancel interview coaching",
      returnToConversationBehavior: "return to workforce conversation"
    },
    {
      domain: "workforce",
      workflowId: "workforce.apprenticeship-path",
      conversationalPurpose: "Prepare an apprenticeship, internship, or training-to-work pathway without submitting applications.",
      transitionSignals: ["apprenticeship", "internship", "training to work", "youth employment", "pathway to work", "work placement"],
      requiredContext: ["career pathway goal"],
      optionalContext: ["age group", "location", "transport", "skills", "training provider"],
      missingInformationQuestions: ["What type of work pathway are you looking for?", "Do you need training, transport, childcare, or equipment support included?"],
      safetyClass: "employment_provider_gated",
      confirmationRequirements: ["acceptance and confirmation before opening", "final confirmation before provider contact or application submission"],
      providerRequirements: ["verified employer, workforce, or training connector for live placement"],
      supportedVisualSurface: "apprenticeship pathway workspace",
      supportedVoiceCommands: ["add support needs", "add training options", "show blocked provider state", "close the workflow"],
      structuredInputRequirements: ["candidate details", "program", "provider", "support needs"],
      possibleOutputs: ["pathway plan", "support checklist", "provider questions"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["provider/employer response before claiming placement"],
      receiptBehavior: "no placement receipt without provider evidence",
      cancellationBehavior: "cancel pathway preparation",
      returnToConversationBehavior: "return to workforce conversation"
    },
    {
      domain: "marketplace",
      workflowId: "marketplace.inquiry-prep",
      conversationalPurpose: "Prepare marketplace buyer/seller questions without orders or payment.",
      transitionSignals: ["buyer", "seller", "marketplace", "agritrade", "price", "order", "sell", "product"],
      requiredContext: ["product or marketplace goal"],
      optionalContext: ["quantity", "quality", "delivery needs", "buyer/seller name"],
      missingInformationQuestions: ["What product is this about?", "Do you need buyer questions, seller questions, or logistics planning?"],
      safetyClass: "transaction_gated",
      confirmationRequirements: ["acceptance before opening", "final confirmation before contact, order, payment, or purchase"],
      providerRequirements: ["configured marketplace/payment connectors for live execution"],
      supportedVisualSurface: "marketplace preparation workspace",
      supportedVoiceCommands: ["add quantity", "draft buyer message", "compare options", "close the workflow"],
      structuredInputRequirements: ["exact quantity", "price", "recipient", "payment details"],
      possibleOutputs: ["inquiry draft", "buyer checklist", "seller checklist"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["provider and payment receipt for live transaction"],
      receiptBehavior: "no success receipt without verified provider outcome",
      cancellationBehavior: "cancel local marketplace prep",
      returnToConversationBehavior: "return to marketplace conversation"
    },
    {
      domain: "marketplace",
      workflowId: "marketplace.buyer-readiness-checklist",
      conversationalPurpose: "Prepare buyer-readiness questions without contacting buyers, taking orders, or payment.",
      transitionSignals: ["buyer readiness", "buyer checklist", "sell to buyer", "buyer questions", "market access"],
      requiredContext: ["product or market goal"],
      optionalContext: ["quantity", "quality", "price", "delivery", "certification"],
      missingInformationQuestions: ["What product do you want to sell?", "Do you need quality, quantity, price, or delivery questions?"],
      safetyClass: "transaction_gated",
      confirmationRequirements: ["acceptance and confirmation before opening", "final confirmation before buyer contact, order, payment, or dispatch"],
      providerRequirements: ["configured marketplace and payment/logistics connectors for live execution"],
      supportedVisualSurface: "buyer readiness workspace",
      supportedVoiceCommands: ["add quality checks", "draft buyer questions", "add delivery constraints", "close the workflow"],
      structuredInputRequirements: ["buyer", "quantity", "price", "delivery route", "payment details"],
      possibleOutputs: ["buyer readiness checklist", "inquiry draft", "market-access plan"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["marketplace/provider evidence before claiming transaction"],
      receiptBehavior: "no buyer/order/payment receipt without provider evidence",
      cancellationBehavior: "cancel buyer readiness prep",
      returnToConversationBehavior: "return to marketplace conversation"
    },
    {
      domain: "marketplace",
      workflowId: "marketplace.seller-listing-prep",
      conversationalPurpose: "Prepare a seller listing draft without publishing, buyer contact, or checkout.",
      transitionSignals: ["seller listing", "create listing", "marketplace listing", "list my crop", "sell my crop"],
      requiredContext: ["product to list"],
      optionalContext: ["quantity", "quality", "price range", "photos", "pickup"],
      missingInformationQuestions: ["What product should the listing describe?", "Do you know quantity, grade, and pickup/delivery needs?"],
      safetyClass: "transaction_gated",
      confirmationRequirements: ["acceptance and confirmation before opening", "final confirmation and marketplace readiness before publishing or contact"],
      providerRequirements: ["configured marketplace connector for live listing"],
      supportedVisualSurface: "seller listing preparation workspace",
      supportedVoiceCommands: ["add product details", "make it clearer", "show blocked publish state", "close the workflow"],
      structuredInputRequirements: ["seller details", "product details", "price", "photos", "contact method"],
      possibleOutputs: ["listing draft", "quality checklist", "blocked publish state"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["marketplace provider response before claiming publication"],
      receiptBehavior: "no listing receipt without provider evidence",
      cancellationBehavior: "cancel listing prep",
      returnToConversationBehavior: "return to marketplace conversation"
    },
    {
      domain: "logistics",
      workflowId: "logistics.route-plan",
      conversationalPurpose: "Prepare route, shipment, field visit, or mobile clinic logistics without dispatch.",
      transitionSignals: ["route", "map", "field visit", "shipment", "logistics", "delivery", "mobile clinic", "transport"],
      requiredContext: ["origin or destination need"],
      optionalContext: ["address", "vehicle", "timing", "cargo"],
      missingInformationQuestions: ["What origin and destination should I use?", "Is this a field visit, clinic trip, or shipment?"],
      safetyClass: "location_dispatch_gated",
      confirmationRequirements: ["acceptance before opening", "explicit confirmation before location sharing, dispatch, or navigation handoff"],
      providerRequirements: ["maps/logistics provider for live route or dispatch"],
      supportedVisualSurface: "route planning workspace",
      supportedVoiceCommands: ["add address", "avoid tolls", "show fallback", "close the workflow"],
      structuredInputRequirements: ["exact address", "private location", "shipment details"],
      possibleOutputs: ["route prep", "visit checklist", "shipment plan"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["provider response for live route/dispatch"],
      receiptBehavior: "local prep receipt only unless provider verifies",
      cancellationBehavior: "cancel local logistics prep",
      returnToConversationBehavior: "return to logistics conversation"
    },
    {
      domain: "logistics",
      workflowId: "logistics.shipment-intake",
      conversationalPurpose: "Prepare shipment intake details without booking transport or dispatch.",
      transitionSignals: ["shipment intake", "shipping details", "prepare shipment", "shipment checklist", "cargo details"],
      requiredContext: ["shipment goal"],
      optionalContext: ["origin", "destination", "cargo", "temperature need", "timing"],
      missingInformationQuestions: ["What is being shipped?", "What origin and destination text should be used?"],
      safetyClass: "location_dispatch_gated",
      confirmationRequirements: ["acceptance and confirmation before opening", "final confirmation before booking, dispatch, or location sharing"],
      providerRequirements: ["configured logistics provider for live booking or tracking"],
      supportedVisualSurface: "shipment intake workspace",
      supportedVoiceCommands: ["add cold chain", "add pickup window", "show blocked dispatch state", "close the workflow"],
      structuredInputRequirements: ["origin", "destination", "cargo", "recipient", "timing"],
      possibleOutputs: ["shipment intake packet", "transport questions", "blocked dispatch status"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["logistics provider receipt before claiming booking or dispatch"],
      receiptBehavior: "no shipment booking receipt without provider evidence",
      cancellationBehavior: "cancel shipment intake",
      returnToConversationBehavior: "return to logistics conversation"
    },
    {
      domain: "logistics",
      workflowId: "logistics.tracking-provider-readiness",
      conversationalPurpose: "Prepare shipment tracking-provider readiness without claiming live tracking.",
      transitionSignals: ["shipment tracking", "tracking provider", "track delivery", "where is shipment", "tracking readiness"],
      requiredContext: ["tracking need"],
      optionalContext: ["tracking number", "provider", "destination", "delivery window"],
      missingInformationQuestions: ["Which provider or tracking number should be checked?", "Do you want a blocked-state summary or a tracking checklist?"],
      safetyClass: "provider_status_gated",
      confirmationRequirements: ["acceptance and confirmation before opening", "provider readiness required before live tracking claims"],
      providerRequirements: ["configured tracking/logistics provider"],
      supportedVisualSurface: "tracking readiness workspace",
      supportedVoiceCommands: ["add tracking number", "show provider status", "prepare update message", "close the workflow"],
      structuredInputRequirements: ["tracking number", "provider name", "recipient details"],
      possibleOutputs: ["tracking readiness packet", "status-check checklist", "blocked provider state"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["provider result before claiming location/status"],
      receiptBehavior: "no tracking receipt without provider evidence",
      cancellationBehavior: "cancel tracking readiness prep",
      returnToConversationBehavior: "return to logistics conversation"
    },
    {
      domain: "communications",
      workflowId: "communications.message-draft",
      conversationalPurpose: "Draft messages, emails, calls, WhatsApp, or Telegram content without sending.",
      transitionSignals: ["message", "email", "sms", "whatsapp", "telegram", "phone call", "call script", "contact"],
      requiredContext: ["communication purpose"],
      optionalContext: ["recipient", "language", "tone", "source topic"],
      missingInformationQuestions: ["Who is this for?", "Do you want SMS, WhatsApp, email, Telegram, or a phone script?"],
      safetyClass: "communication_execution_gated",
      confirmationRequirements: ["acceptance before draft", "final confirmation and provider readiness before sending or calling"],
      providerRequirements: ["configured communications provider"],
      supportedVisualSurface: "message preparation workspace",
      supportedVoiceCommands: ["make it shorter", "translate it", "do not send", "close the workflow"],
      structuredInputRequirements: ["recipient", "exact message", "contact details"],
      possibleOutputs: ["message draft", "call script", "communication checklist"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["provider message/call ID for live outcome"],
      receiptBehavior: "no sent receipt without provider evidence",
      cancellationBehavior: "cancel draft",
      returnToConversationBehavior: "return to conversation"
    },
    {
      domain: "communications",
      workflowId: "communications.phone-script-prep",
      conversationalPurpose: "Prepare a phone-call script without dialing or starting a call.",
      transitionSignals: ["phone script", "call script", "prepare a phone call", "talking points", "call preparation"],
      requiredContext: ["call purpose"],
      optionalContext: ["recipient role", "language", "tone", "key facts"],
      missingInformationQuestions: ["Who is the call for?", "Do you want a short script, checklist, or talking points?"],
      safetyClass: "communication_execution_gated",
      confirmationRequirements: ["acceptance and confirmation before opening", "final confirmation and provider readiness before any call"],
      providerRequirements: ["configured voice/call provider for live calling"],
      supportedVisualSurface: "phone script preparation workspace",
      supportedVoiceCommands: ["make it shorter", "make it respectful", "translate it", "close the workflow"],
      structuredInputRequirements: ["recipient", "phone number", "exact purpose", "consent state"],
      possibleOutputs: ["phone script", "call checklist", "blocked call state"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["provider call SID/receipt before claiming a live call"],
      receiptBehavior: "no call receipt without provider evidence",
      cancellationBehavior: "cancel phone script",
      returnToConversationBehavior: "return to communication conversation"
    },
    {
      domain: "communications",
      workflowId: "communications.multichannel-message-prep",
      conversationalPurpose: "Prepare SMS, WhatsApp, email, or Telegram variants without sending.",
      transitionSignals: ["sms draft", "whatsapp draft", "email draft", "telegram draft", "multichannel message", "prepare an sms", "prepare a whatsapp", "prepare an email"],
      requiredContext: ["message purpose"],
      optionalContext: ["channel", "recipient", "language", "tone"],
      missingInformationQuestions: ["Which channel should I prepare for: SMS, WhatsApp, email, or Telegram?", "Who is the intended recipient?"],
      safetyClass: "communication_execution_gated",
      confirmationRequirements: ["acceptance and confirmation before opening", "final confirmation and provider readiness before sending"],
      providerRequirements: ["configured communications provider for live send"],
      supportedVisualSurface: "multichannel message preparation workspace",
      supportedVoiceCommands: ["make SMS version", "make WhatsApp version", "make email version", "do not send", "close the workflow"],
      structuredInputRequirements: ["recipient", "contact method", "message text", "consent state"],
      possibleOutputs: ["SMS draft", "WhatsApp draft", "email draft", "Telegram draft"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["provider message ID before claiming sent"],
      receiptBehavior: "no sent receipt without provider evidence",
      cancellationBehavior: "cancel message preparation",
      returnToConversationBehavior: "return to communication conversation"
    },
    {
      domain: "drone",
      workflowId: "drone.mission-plan",
      conversationalPurpose: "Prepare drone or field-operation planning without flight execution.",
      transitionSignals: ["drone", "scan", "field operation", "mission planning", "aerial", "imagery"],
      requiredContext: ["field operation purpose"],
      optionalContext: ["field boundary", "crop", "weather", "operator"],
      missingInformationQuestions: ["What is the drone mission purpose?", "Is there a licensed operator and safe flight window?"],
      safetyClass: "physical_operation_gated",
      confirmationRequirements: ["acceptance before planning", "licensed provider confirmation before any flight"],
      providerRequirements: ["configured drone provider and jurisdiction approval"],
      supportedVisualSurface: "drone mission planning workspace",
      supportedVoiceCommands: ["add safety checklist", "show blocked state", "close the workflow"],
      structuredInputRequirements: ["field boundary", "operator", "flight location"],
      possibleOutputs: ["mission checklist", "operator questions", "blocked readiness summary"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["provider and operator confirmation"],
      receiptBehavior: "no flight receipt without provider evidence",
      cancellationBehavior: "cancel mission plan",
      returnToConversationBehavior: "return to field conversation"
    },
    {
      domain: "drone",
      workflowId: "drone.safety-readiness-checklist",
      conversationalPurpose: "Prepare a drone safety and readiness checklist without flight execution.",
      transitionSignals: ["drone safety checklist", "drone readiness", "flight safety", "licensed operator", "safe flight window"],
      requiredContext: ["flight planning purpose"],
      optionalContext: ["operator", "weather", "field boundary", "jurisdiction"],
      missingInformationQuestions: ["What is the drone mission for?", "Is there a licensed operator and safe weather window?"],
      safetyClass: "physical_operation_gated",
      confirmationRequirements: ["acceptance and confirmation before opening", "licensed provider and jurisdiction confirmation before any flight"],
      providerRequirements: ["configured drone provider and approved operator"],
      supportedVisualSurface: "drone safety readiness workspace",
      supportedVoiceCommands: ["add weather check", "add operator questions", "show blocked flight state", "close the workflow"],
      structuredInputRequirements: ["operator", "field boundary", "jurisdiction", "weather source"],
      possibleOutputs: ["safety checklist", "operator questions", "blocked flight readiness state"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["licensed operator/provider confirmation before any live flight"],
      receiptBehavior: "no flight receipt without provider evidence",
      cancellationBehavior: "cancel drone safety checklist",
      returnToConversationBehavior: "return to drone or field conversation"
    },
    {
      domain: "drone",
      workflowId: "drone.crop-scan-prep",
      conversationalPurpose: "Prepare a crop-scan mission brief without claiming imagery or launching a drone.",
      transitionSignals: ["crop scan", "scan my field", "drone crop scan", "aerial crop check", "field imagery plan"],
      requiredContext: ["crop scan purpose"],
      optionalContext: ["crop", "symptoms", "field boundary", "weather", "operator"],
      missingInformationQuestions: ["What crop or field issue should the scan focus on?", "Do you have a field boundary or only a general field description?"],
      safetyClass: "physical_operation_gated",
      confirmationRequirements: ["acceptance and confirmation before opening", "provider, operator, and jurisdiction confirmation before flight"],
      providerRequirements: ["configured drone provider and safe flight approval"],
      supportedVisualSurface: "crop scan preparation workspace",
      supportedVoiceCommands: ["add symptoms", "add safety notes", "show blocked provider state", "close the workflow"],
      structuredInputRequirements: ["field boundary", "crop", "operator", "weather"],
      possibleOutputs: ["crop scan brief", "operator checklist", "blocked scan state"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["provider/operator evidence before claiming scan or imagery"],
      receiptBehavior: "no imagery or scan receipt without provider evidence",
      cancellationBehavior: "cancel crop scan prep",
      returnToConversationBehavior: "return to agriculture or drone conversation"
    },
    {
      domain: "daily-life",
      workflowId: "daily-life.task-plan",
      conversationalPurpose: "Organize everyday tasks, reminders, and support needs without automatic scheduling.",
      transitionSignals: ["remind", "daily task", "organize my day", "help me remember", "caregiver", "family"],
      requiredContext: ["task goal"],
      optionalContext: ["time", "caregiver", "language"],
      missingInformationQuestions: ["What should I help organize first?", "Do you want a reminder proposal or a simple checklist?"],
      safetyClass: "low_risk_prepare",
      confirmationRequirements: ["acceptance before opening", "confirmation before any future reminder scheduling"],
      providerRequirements: ["configured reminders/calendar provider for live scheduling"],
      supportedVisualSurface: "daily task workspace",
      supportedVoiceCommands: ["repeat that", "make it simpler", "close the workflow"],
      structuredInputRequirements: ["exact time", "contact details"],
      possibleOutputs: ["daily checklist", "reminder proposal", "caregiver note"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["calendar/reminder provider receipt for live schedule"],
      receiptBehavior: "local prep receipt only",
      cancellationBehavior: "cancel task plan",
      returnToConversationBehavior: "return to conversation"
    },
    {
      domain: "daily-life",
      workflowId: "daily-life.caregiver-routine",
      conversationalPurpose: "Prepare a caregiver routine or family support checklist without scheduling or messaging anyone.",
      transitionSignals: ["caregiver routine", "family support checklist", "daily care plan", "help my mother", "help my father", "support my parent"],
      requiredContext: ["support need"],
      optionalContext: ["relationship", "time of day", "language", "health or daily-life topic"],
      missingInformationQuestions: ["Who is the routine for?", "Do you want a simple checklist, reminder proposal, or provider question list?"],
      safetyClass: "family_support_prepare",
      confirmationRequirements: ["acceptance and confirmation before opening", "confirmation before any reminder, message, provider contact, or sharing"],
      providerRequirements: ["configured reminders/communications/provider connector for live action"],
      supportedVisualSurface: "caregiver routine workspace",
      supportedVoiceCommands: ["make it simpler", "add reminder proposal", "do not message anyone", "close the workflow"],
      structuredInputRequirements: ["person", "time", "contact details", "consent state"],
      possibleOutputs: ["caregiver checklist", "reminder proposal", "family support note"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["provider/reminder/message receipt before claiming live action"],
      receiptBehavior: "local caregiver plan receipt only",
      cancellationBehavior: "cancel caregiver routine",
      returnToConversationBehavior: "return to daily support conversation"
    },
    {
      domain: "daily-life",
      workflowId: "daily-life.reminder-proposal",
      conversationalPurpose: "Prepare a reminder proposal without scheduling it automatically.",
      transitionSignals: ["reminder proposal", "set a reminder", "remind me", "help me remember", "daily reminder"],
      requiredContext: ["reminder purpose"],
      optionalContext: ["time", "repeat pattern", "language", "caregiver"],
      missingInformationQuestions: ["What should the reminder say?", "When should it happen if you later confirm scheduling?"],
      safetyClass: "low_risk_prepare",
      confirmationRequirements: ["acceptance and confirmation before opening", "final confirmation and configured provider before scheduling"],
      providerRequirements: ["configured reminder/calendar provider for live scheduling"],
      supportedVisualSurface: "reminder proposal workspace",
      supportedVoiceCommands: ["change time", "make it simpler", "do not schedule", "close the workflow"],
      structuredInputRequirements: ["exact time", "repeat pattern", "recipient"],
      possibleOutputs: ["reminder draft", "repeat schedule proposal", "blocked scheduling state"],
      executionCapability: "local_prepare_only",
      verificationRequirements: ["calendar/reminder provider receipt before claiming scheduled"],
      receiptBehavior: "no scheduled reminder receipt without provider evidence",
      cancellationBehavior: "cancel reminder proposal",
      returnToConversationBehavior: "return to daily support conversation"
    }
  ]);

  function normalizeText(text) {
    return String(text || "").toLowerCase().replace(/[^\p{L}\p{N}\s'?]/gu, " ").replace(/\s+/g, " ").trim();
  }

  function detectDomains(text) {
    const normalized = normalizeText(text);
    const domainRules = [
      ["health", /\b(health|diabetes|hypertension|blood pressure|obesity|older adult|clinic|patient|chronic|rpm|rtm|caregiver|chw|community health worker)\b/],
      ["pharmacy", /\b(pharmacy|pharmacist|medication|medicine|refill|prescription|drug|counseling)\b/],
      ["agriculture", /\b(crop|farm|farmer|maize|tomato|soil|pest|disease|irrigation|yellow leaves|planting|harvest|field)\b/],
      ["learning", /\b(learn|learning|training|teach|course|literacy|certificate|lesson|study)\b/],
      ["workforce", /\b(job|jobs|work|career|resume|résumé|application|interview|employer|workforce)\b/],
      ["marketplace", /\b(marketplace|agritrade|buyer|seller|price|order|sell|purchase|product)\b/],
      ["logistics", /\b(route|map|shipment|delivery|field visit|mobile clinic|transport|logistics|address|directions)\b/],
      ["communications", /\b(message|email|sms|whatsapp|telegram|phone|call|contact|draft)\b/],
      ["drone", /\b(drone|scan|aerial|imagery|flight|mission)\b/],
      ["daily-life", /\b(remind|daily|organize my day|remember|family|caregiver)\b/]
    ];
    const domains = domainRules.filter(([, pattern]) => pattern.test(normalized)).map(([domain]) => domain);
    if (/\b(apprenticeship|internship|training to work|work placement|youth employment)\b/.test(normalized) && !domains.includes("workforce")) {
      domains.push("workforce");
    }
    return domains;
  }

  function classifyTurn(text, context = {}) {
    const raw = String(text || "");
    const normalized = normalizeText(raw);
    const domains = detectDomains(raw);
    const signals = [];
    let state = CONVERSATIONAL_STATES.EXPLORING;
    if (RETURNING_TERMS.test(raw)) {
      state = CONVERSATIONAL_STATES.RETURNING;
      signals.push("returning_or_branching");
    } else if (HIGH_RISK_TERMS.test(raw)) {
      state = CONVERSATIONAL_STATES.ACTING;
      signals.push("acting_signal");
    } else if (PREPARING_TERMS.test(raw)) {
      state = CONVERSATIONAL_STATES.PREPARING;
      signals.push("preparing_signal");
    } else if (CONSIDERING_TERMS.test(raw)) {
      state = CONVERSATIONAL_STATES.CONSIDERING;
      signals.push("considering_signal");
    }
    if (SOURCE_TERMS.test(raw)) signals.push("source_request");
    if (/^(why|what|how|tell me|explain|can you explain|i wonder)\b/i.test(normalized)) signals.push("curiosity");
    if (context?.activeWorkflowId) signals.push("active_workflow_context");
    return {
      schemaVersion: "nexus-conversation-state.v1",
      state,
      domains,
      signals,
      normalizedText: normalized,
      userRole: context.userRole || "unknown",
      uncertainty: domains.length ? "medium" : "high",
      executionInferred: false
    };
  }

  function scoreWorkflow(workflow, text, domains = []) {
    const haystack = normalizeText(`${text} ${domains.join(" ")}`);
    let score = domains.includes(workflow.domain) ? 4 : 0;
    for (const signal of workflow.transitionSignals || []) {
      if (haystack.includes(normalizeText(signal))) {
        score += 3;
        if (normalizeText(signal).includes(" ")) score += 2;
      }
    }
    if (workflow.domain === "pharmacy" && domains.includes("health")) score += 1;
    if (workflow.domain === "logistics" && /mobile clinic|field visit|route/i.test(text)) score += 2;
    if (workflow.workflowId === "workforce.apprenticeship-path" && /\b(apprenticeship|internship|training to work|work placement|youth employment)\b/i.test(text)) score += 5;
    if (workflow.workflowId === "workforce.interview-coaching" && /\b(interview coaching|interview practice|practice interview|job interview)\b/i.test(text)) score += 5;
    if (workflow.workflowId === "learning.literacy-support-path" && /\b(literacy support|low literacy|reading help|language support)\b/i.test(text)) score += 5;
    if (workflow.workflowId === "learning.training-provider-questions" && /\b(training provider|course provider|enrollment|certificate)\b/i.test(text)) score += 5;
    if (workflow.workflowId === "marketplace.buyer-readiness-checklist" && /\b(buyer readiness|buyer checklist|market access)\b/i.test(text)) score += 5;
    if (workflow.workflowId === "marketplace.seller-listing-prep" && /\b(seller listing|create listing|list my crop|sell my crop)\b/i.test(text)) score += 5;
    if (workflow.workflowId === "logistics.shipment-intake" && /\b(shipment intake|shipping details|prepare shipment|cargo details|cold chain cargo)\b/i.test(text)) score += 5;
    if (workflow.workflowId === "logistics.tracking-provider-readiness" && /\b(shipment tracking|tracking provider|tracking readiness|tracking number)\b/i.test(text)) score += 5;
    return score;
  }

  function selectWorkflows(text, domains = [], limit = 3) {
    return WORKFLOW_REGISTRY
      .map(workflow => ({ workflow, score: scoreWorkflow(workflow, text, domains) }))
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.workflow);
  }

  function resolveAcceptedWorkflow(reply, lastProposal) {
    const normalized = normalizeText(reply);
    const options = Array.isArray(lastProposal?.options) ? lastProposal.options : [];
    if (!options.length) return null;
    if (/\b(first|one|1)\b/.test(normalized)) return options[0];
    if (/\b(second|two|2)\b/.test(normalized)) return options[1] || null;
    if (/\b(third|three|3)\b/.test(normalized)) return options[2] || null;
    return options.find(workflow => normalizeText(`${workflow.workflowId} ${workflow.conversationalPurpose} ${workflow.transitionSignals.join(" ")}`).split(" ").some(token => token.length > 4 && normalized.includes(token))) || null;
  }

  function buildTransitionProposal(text, context = {}) {
    const classification = classifyTurn(text, context);
    const accepted = resolveAcceptedWorkflow(text, context.lastProposal);
    if (accepted) {
      return buildWorkflowOpening(accepted, text, context, classification);
    }
    const options = selectWorkflows(text, classification.domains, 3);
    const shouldOffer = classification.state === CONVERSATIONAL_STATES.PREPARING || classification.state === CONVERSATIONAL_STATES.CONSIDERING || options.length > 0 && /\b(use this|something.*field|staff|clinic|practical|process|what should we do|next step)\b/i.test(text);
    return {
      schemaVersion: "nexus-conversation-transition-proposal.v1",
      classification,
      action: shouldOffer ? "offer_workflows" : "answer_conversationally",
      options,
      sourceRequest: classification.signals.includes("source_request"),
      message: buildConversationalMessage(text, classification, options, context),
      opensWorkflow: false,
      executionAuthorized: false,
      providerHandoffAuthorized: false
    };
  }

  function buildConversationalMessage(text, classification, options, context = {}) {
    if (classification.state === CONVERSATIONAL_STATES.ACTING) {
      return "I can help prepare that, but I cannot execute it from conversation alone. I need the exact action, provider readiness, explicit confirmation, outcome verification, and a receipt before anything real happens.";
    }
    if (classification.signals.includes("source_request")) {
      return context.activeSources?.length
        ? "I can show the sources tied to this topic and keep them attached to any workflow we create."
        : "I can track sources for this topic. No live source was used in this turn unless a configured retrieval provider returned results.";
    }
    if (options.length) {
      const labels = options.map(workflow => workflow.conversationalPurpose.replace(/\.$/, "")).join("; ");
      return `We can keep talking, or I can help turn this into practical work. Useful options: ${labels}. Which would help most?`;
    }
    return "I can keep exploring this with you. If you want a practical next step, ask me to turn it into a checklist, plan, briefing, draft, or questions.";
  }

  function buildWorkflowOpening(workflow, text, context = {}, classification = classifyTurn(text, context)) {
    const carriedContext = buildContextTransfer(workflow, text, context);
    return {
      schemaVersion: "nexus-conversation-transition-proposal.v1",
      classification,
      action: "open_workflow",
      acceptedWorkflowId: workflow.workflowId,
      workflow,
      carriedContext,
      message: `Okay. I will open a focused ${workflow.domain} workflow and keep our conversation visible. I carried only the relevant context, and no external action is authorized.`,
      opensWorkflow: true,
      executionAuthorized: false,
      providerHandoffAuthorized: false,
      confirmationRequiredBeforeExecution: true
    };
  }

  function buildContextTransfer(workflow, text, context = {}) {
    const topic = context.activeTopic || String(text || "").slice(0, 160);
    const sources = Array.isArray(context.activeSources) ? context.activeSources.slice(0, 5) : [];
    return {
      schemaVersion: "nexus-workflow-context-transfer.v1",
      workflowId: workflow.workflowId,
      domain: workflow.domain,
      purpose: workflow.conversationalPurpose,
      carried: {
        topic,
        userGoal: context.userGoal || String(text || "").slice(0, 160),
        userRole: context.userRole || "unknown",
        activeLanguage: context.activeLanguage || "en",
        sourceCount: sources.length,
        safetyClass: workflow.safetyClass
      },
      sources,
      excluded: [
        "unrelated topic data",
        "another person's private information",
        "stale confirmation",
        "cancelled instructions",
        "unsupported assumptions",
        "unverified facts as confirmed data"
      ],
      correctionAllowed: true
    };
  }

  const api = Object.freeze({
    CONVERSATIONAL_STATES,
    WORKFLOW_REGISTRY,
    normalizeText,
    detectDomains,
    classifyTurn,
    selectWorkflows,
    buildTransitionProposal,
    buildWorkflowOpening,
    buildContextTransfer,
    resolveAcceptedWorkflow
  });

  if (typeof module !== "undefined" && module.exports) module.exports = api;
  globalScope.NexusConversationWorkflowTransitionEngine = api;
})(typeof window !== "undefined" ? window : globalThis);
