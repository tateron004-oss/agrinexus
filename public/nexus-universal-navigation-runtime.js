(function initNexusUniversalNavigationRuntime(root, factory) {
  const runtime = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = runtime;
  }
  root.NexusUniversalNavigationRuntime = runtime;
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusUniversalNavigationRuntimeFactory() {
  "use strict";

  const CAPABILITY_STATES = Object.freeze([
    "available_now",
    "local_only",
    "prepared",
    "queued",
    "requires_review",
    "requires_provider_activation",
    "requires_credentials",
    "blocked",
    "completed_and_verified",
    "failed"
  ]);

  const DEFAULT_BLOCKED_ACTIONS = Object.freeze([
    "No hidden provider handoff",
    "No payment, booking, dispatch, call, message, pharmacy, medical, location, or drone execution without provider activation, consent, confirmation, audit, and outcome verification",
    "No claim of completion until the configured provider returns a verified result"
  ]);

  const WORKSPACES = Object.freeze([
    workspace("health-home", "Health & Care Home", "Health & Care", "Open health access, chronic care, telehealth, mobile clinic, pharmacy, and provider preparation.", "chronic-care", ["health help", "health support", "care help"], ["Choose chronic care, intake, pharmacy, mobile clinic, or provider preparation."], ["Symptoms, readings, access need, preferred language, urgency."], ["Open intake", "Prepare provider summary", "Review urgent warning signs"], ["Diagnose", "Prescribe", "Book appointment", "Contact provider"], ["Telehealth provider", "pharmacy provider", "mobile clinic partner"], ["Educational and preparation support only."]),
    workspace("chronic-care", "Chronic Care Workspace", "Health & Care", "Organize diabetes, hypertension, obesity, RPM, RTM, and CHW support for review.", "chronic-care", ["chronic illness support", "diabetes", "hypertension", "blood pressure", "obesity", "rpm", "rtm", "community health worker"], ["Record readings", "Prepare trend summary", "Build provider-ready questions"], ["Condition focus, reading values, symptoms, medication questions, timing."], ["Local tracking", "Provider-ready summary", "Urgent warning education"], ["Diagnose", "Prescribe", "Change medication"], ["Clinical provider integration"], ["Nexus prepares information; clinicians make clinical decisions."]),
    workspace("heat-risk", "Heat Risk Workspace", "Health & Care", "Prepare heat illness and safety guidance without emergency dispatch.", "chronic-care", ["heat illness", "heat risk", "sick from heat"], ["Review warning signs", "Prepare cooling and access plan"], ["Symptoms, exposure time, age/risk factors, location context if user chooses."], ["Education", "Care access preparation"], ["Emergency dispatch"], ["Emergency services connector"], ["If danger is immediate, contact local emergency services."]),
    workspace("patient-intake", "Patient Intake Workspace", "Health & Care", "Collect review-only intake details for care preparation.", "telehealth-intake", ["patient intake", "start intake", "telehealth intake"], ["Collect concern", "Organize vitals", "Prepare packet"], ["Patient label, symptoms, timing, vitals, medications, access needs."], ["Local intake packet"], ["Submit medical record", "Book visit"], ["Telehealth/EHR connector"], ["Review-only until connected providers and consent exist."]),
    workspace("provider-referral-prep", "Provider Referral Preparation", "Health & Care", "Prepare provider referral details for review.", "provider-support", ["provider help", "provider referral", "care team"], ["Prepare summary", "Check consent", "Review destination"], ["Provider type, reason, urgency, preferred language."], ["Referral packet preparation"], ["Submit referral"], ["Provider network connector"], ["Requires consent, provider activation, and audit before submission."]),
    workspace("pharmacy-routing-prep", "Pharmacy Routing Preparation", "Health & Care", "Prepare pharmacy questions and routing details.", "pharmacy-support", ["pharmacy", "medicine", "medication", "refill"], ["Organize medication list", "Prepare pharmacist question"], ["Medication name, dose if known, concern, allergies."], ["Pharmacy packet preparation"], ["Request refill", "Change medication", "Contact pharmacy"], ["Pharmacy connector"], ["No prescribing or pharmacy fulfillment."]),
    workspace("mobile-clinic-routing-prep", "Mobile Clinic Routing Preparation", "Health & Care", "Prepare mobile clinic access needs for future partner review.", "mobile-clinic", ["mobile clinic", "clinic outreach", "community clinic"], ["Prepare request", "Review access barriers"], ["Community, service need, time window, barriers."], ["Local request packet"], ["Dispatch clinic", "Share location"], ["Mobile clinic provider"], ["No dispatch without provider activation and consent."]),

    workspace("agriculture-home", "Agriculture Home", "Agriculture & Food Security", "Open crop, soil, irrigation, farm profile, live knowledge, and field survey support.", "agriculture", ["agriculture", "farm support", "farm help"], ["Choose crop support, irrigation, farm profile, field survey, or training."], ["Crop, region, issue, urgency, season context."], ["Local farm support", "Source-backed research when configured"], ["Dispatch field team", "Guarantee yield"], ["Agronomy partner", "live knowledge provider"], ["Educational and planning support only."]),
    workspace("crop-support", "Crop Support Workspace", "Agriculture & Food Security", "Organize crop problems and route to source-backed guidance when configured.", "crop-support", ["crop problem", "crop issue", "plants are sick", "pest problem", "disease", "soil problem", "harvest help"], ["Describe issue", "Prepare expert checklist", "Run source-backed research if configured"], ["Crop, visible signs, water/soil notes, timing."], ["Crop issue packet"], ["Pesticide prescription", "Field dispatch"], ["Agronomy expert partner"], ["Local expert confirmation is recommended."]),
    workspace("farm-profile", "Farm Profile Workspace", "Agriculture & Food Security", "Build a reusable farm context for planning.", "farm-planning", ["farm profile", "farm planning", "farm plan"], ["Record crops", "Plan season", "Track missing data"], ["Farm size, crops, soil, irrigation, storage, market needs."], ["Local farm profile"], ["Government/insurance submission"], ["Database connector"], ["Production database required for durable records."]),
    workspace("irrigation-support", "Irrigation Support Workspace", "Agriculture & Food Security", "Prepare irrigation planning and water-stress questions.", "agriculture", ["irrigation help", "water stress", "dry soil"], ["Review water stress", "Prepare irrigation notes"], ["Crop, soil, water source, rainfall context."], ["Planning support"], ["Equipment purchase", "Field dispatch"], ["Agronomy/provider partner"], ["No guarantee of yield or input result."]),
    workspace("pest-disease-support", "Pest & Disease Support Workspace", "Agriculture & Food Security", "Prepare pest/disease observations and research prompts.", "crop-support", ["pest", "disease", "blight", "leaf spots"], ["Describe symptoms", "Prepare source-backed research"], ["Crop, symptoms, photos available, timing, area affected."], ["Review checklist"], ["Diagnosis guarantee", "Chemical prescription"], ["Agronomy expert partner"], ["Use local expert confirmation for treatment decisions."]),
    workspace("live-knowledge-agriculture", "Live Knowledge Agriculture Research", "Agriculture & Food Security", "Use configured live knowledge providers for citation-ready agriculture research.", "resource-assistant", ["research agriculture", "current best practices", "sources about crop"], ["Run research", "Show citations", "Prepare research packet"], ["Research question and region/crop context."], ["Source-backed answer when configured"], ["Fake citations"], ["Tavily/Brave/Exa/generic provider"], ["No citations are shown unless returned by a provider."]),
    workspace("drone-field-survey-prep", "Drone Field Survey Preparation", "Agriculture & Food Security", "Prepare drone mission scope and safety checklist without flight dispatch.", "field-visit", ["drone support", "field survey", "drone mission", "crop imaging", "flight checklist"], ["Plan mission", "Review checklist", "Prepare field imaging report"], ["Field area, objective, crop, safety constraints."], ["Mission plan"], ["Launch drone", "Capture imagery"], ["Drone provider"], ["No flight occurs without provider and compliance approval."]),

    workspace("marketplace-home", "AgriTrade Marketplace Home", "Trade & Marketplace", "Open buyer, seller, listing, transaction, cancellation, and dispute preparation.", "agritrade", ["marketplace", "agritrade", "marketplace help"], ["Choose buyer/seller/listing support", "Prepare questions"], ["Product, role, quantity, logistics need."], ["Marketplace preparation"], ["Order", "Payment", "Seller contact"], ["Marketplace/payment provider"], ["No transaction is created without gates."]),
    workspace("buyer-workspace", "Buyer Workspace", "Trade & Marketplace", "Prepare buyer questions, comparison, and inquiry packets.", "agritrade", ["i want to buy", "buyer support", "buy crop"], ["Compare listing", "Prepare buyer question"], ["Product, quantity, delivery needs."], ["Inquiry draft"], ["Purchase", "Payment"], ["Marketplace provider"], ["No buyer action is sent automatically."]),
    workspace("seller-workspace", "Seller Workspace", "Trade & Marketplace", "Prepare seller listing, pricing notes, and buyer responses.", "agritrade", ["i want to sell", "seller support", "sell crop"], ["Prepare listing", "Review buyer response"], ["Product, quantity, location, price notes."], ["Listing packet"], ["Post live listing", "Contact buyer"], ["Marketplace provider"], ["Review required before live listing."]),
    workspace("listing-workspace", "Listing Workspace", "Trade & Marketplace", "Prepare product listing details.", "agritrade", ["create listing", "produce listing"], ["Build listing", "Review safety checklist"], ["Product, quantity, condition, location, price."], ["Listing draft"], ["Publish listing"], ["Marketplace provider"], ["No live listing without provider and confirmation."]),
    workspace("order-transaction-prep", "Order / Transaction Preparation", "Trade & Marketplace", "Prepare order or transaction packets without processing payment.", "payment-gate", ["add to transaction", "order support", "transaction"], ["Review order fields", "Check payment gate"], ["Buyer, seller, product, quantity, amount."], ["Transaction draft"], ["Process payment", "Create order"], ["Payment/marketplace provider"], ["Payment remains gated."]),
    workspace("cancellation-add-on-prep", "Cancellation / Add-On Preparation", "Trade & Marketplace", "Prepare cancellation, add-on, or change request details.", "booking-gate", ["cancel order", "add to order", "change order"], ["Prepare change request", "Review cancellation impact"], ["Order reference, requested change, reason."], ["Change packet"], ["Cancel/refund live order"], ["Marketplace/payment provider"], ["No cancellation/refund is submitted here."]),
    workspace("dispute-escalation-prep", "Dispute Escalation Preparation", "Trade & Marketplace", "Prepare dispute notes for review.", "agritrade", ["dispute", "refund issue", "escalate marketplace"], ["Collect evidence", "Prepare review packet"], ["Issue, order, evidence, desired resolution."], ["Dispute packet"], ["Refund", "Provider escalation"], ["Marketplace provider"], ["Review required before escalation."]),

    workspace("logistics-home", "Logistics Home", "Logistics & Maps", "Open route planning, shipment, tracking, delivery, and rural access preparation.", "logistics", ["logistics help", "delivery help"], ["Choose shipment, route, or rural access."], ["Origin, destination, item, timing."], ["Route/shipment preparation"], ["Dispatch carrier", "Live tracking claim"], ["Maps/logistics provider"], ["Typed locations only unless future permission flow exists."]),
    workspace("route-planning", "Route Planning Workspace", "Logistics & Maps", "Prepare typed routes and field visit plans.", "maps", ["plan route", "map route", "route to", "field visit"], ["Enter origin/destination", "Review provider status"], ["Typed origin, destination, purpose."], ["Route preparation"], ["Browser geolocation", "Navigation launch"], ["Maps provider"], ["No location permission is requested automatically."]),
    workspace("shipment-workspace", "Shipment Workspace", "Logistics & Maps", "Prepare shipment details and tracking questions.", "logistics", ["track shipment", "where is my shipment", "shipment"], ["Prepare shipment packet", "Review tracking provider status"], ["Shipment reference, origin, destination, carrier if known."], ["Shipment packet"], ["Live carrier tracking"], ["Tracking provider"], ["No fake live tracking."]),
    workspace("delivery-confirmation", "Delivery Confirmation Workspace", "Logistics & Maps", "Prepare delivery confirmation details.", "logistics", ["delivery confirmation", "confirm delivery"], ["Collect proof notes", "Prepare review"], ["Delivery details, condition, receiver."], ["Confirmation packet"], ["Confirm delivery externally"], ["Logistics provider"], ["No external confirmation without provider."]),
    workspace("tracking-status", "Tracking Status Workspace", "Logistics & Maps", "Show tracking preparation and provider-needed status.", "logistics", ["delivery status", "tracking status"], ["Review status", "Prepare tracking query"], ["Tracking ID or route details."], ["Local status packet"], ["Claim live status"], ["Carrier provider"], ["Live status requires provider."]),
    workspace("rural-access-map", "Rural Access Map Workspace", "Logistics & Maps", "Prepare map questions for rural access, clinics, farms, and routes.", "maps", ["rural access map", "clinic route", "field route"], ["Plan typed route", "Review barriers"], ["Typed places and access constraints."], ["Map preparation"], ["Share precise location"], ["Maps provider"], ["User controls any location sharing."]),

    workspace("learning-home", "Learning Home", "Learning & Workforce", "Open learning, literacy, course pathway, progress, and offline learning support.", "learning", ["training", "course", "learn", "learning"], ["Choose learning path", "Prepare course options"], ["Goal, level, language, format."], ["Learning plan"], ["Enroll in LMS"], ["LMS provider"], ["Enrollment requires configured provider."]),
    workspace("course-pathway", "Course Pathway Workspace", "Learning & Workforce", "Build a learning path for user goals.", "learning", ["course pathway", "find training", "agriculture training"], ["Build pathway", "Suggest resources"], ["Topic, level, time, language."], ["Course plan"], ["Enroll automatically"], ["LMS provider"], ["No LMS account is created here."]),
    workspace("learner-progress", "Learner Progress Workspace", "Learning & Workforce", "Prepare learner progress notes and next steps.", "learning", ["learner progress", "lesson progress"], ["Track local progress", "Plan next lesson"], ["Course, completed work, blockers."], ["Progress note"], ["Certify completion"], ["LMS/certification provider"], ["No credential issued here."]),
    workspace("workforce-home", "Workforce Home", "Learning & Workforce", "Open jobs, applicant support, resume, interview, and employer match preparation.", "jobs", ["job help", "find work", "workforce"], ["Choose job readiness, resume, interview, employer match."], ["Skills, interests, experience, region."], ["Workforce plan"], ["Apply/contact employer"], ["Workforce partner"], ["No employer contacted automatically."]),
    workspace("applicant-support", "Applicant Support Workspace", "Learning & Workforce", "Prepare applicant profile and next step.", "jobs", ["applicant support", "job application"], ["Build readiness packet"], ["Skills, experience, role interest."], ["Applicant packet"], ["Submit application"], ["Employer/workforce provider"], ["User review required before submission."]),
    workspace("resume-interview-support", "Resume & Interview Workspace", "Learning & Workforce", "Prepare resume points and interview practice.", "jobs", ["resume", "interview"], ["Draft resume bullets", "Practice interview"], ["Work history, skills, target role."], ["Practice plan"], ["Send resume"], ["Employer provider"], ["No external sharing here."]),
    workspace("employer-match-prep", "Employer Match Preparation", "Learning & Workforce", "Prepare employer match criteria.", "jobs", ["employer match", "employer partner"], ["Review fit", "Prepare match packet"], ["Role, skills, availability, location preference."], ["Match prep"], ["Employer referral"], ["Employer partner"], ["Referral requires confirmation and partner activation."]),
    workspace("job-readiness", "Job Readiness Workspace", "Learning & Workforce", "Build a readiness checklist for a job path.", "jobs", ["job readiness", "skills checklist"], ["Build checklist", "Connect training needs"], ["Target job, current skills, gaps."], ["Checklist"], ["Submit to employer"], ["Workforce partner"], ["Local preparation only."]),

    workspace("drone-home", "Drone Home", "Drone & Field Operations", "Open drone mission planning, checklist, imaging report, and provider-blocked status.", "field-visit", ["drone home", "drone support"], ["Choose mission planner or checklist."], ["Field, objective, crop, constraints."], ["Mission prep"], ["Dispatch drone"], ["Drone provider"], ["No drone flight occurs."]),
    workspace("mission-planner", "Drone Mission Planner", "Drone & Field Operations", "Prepare a drone mission plan.", "field-visit", ["drone mission", "mission planner"], ["Define objective", "Prepare checklist"], ["Field, route, objective, constraints."], ["Mission plan"], ["Launch flight"], ["Drone provider"], ["Compliance approval required."]),
    workspace("flight-readiness-checklist", "Flight Readiness Checklist", "Drone & Field Operations", "Prepare safety and compliance checklist.", "field-visit", ["flight checklist"], ["Review compliance", "List missing approvals"], ["Weather, airspace, consent, operator."], ["Checklist"], ["Approve flight"], ["Drone provider"], ["No flight approval granted here."]),
    workspace("field-imaging-report", "Field Imaging Report", "Drone & Field Operations", "Prepare imaging report structure.", "field-visit", ["crop imaging", "field imaging report"], ["Organize findings", "Prepare expert review"], ["Image notes, crop issue, field zone."], ["Report draft"], ["Capture imagery"], ["Drone provider"], ["No image diagnosis or capture."]),
    workspace("drone-provider-blocked", "Drone Provider Blocked Status", "Drone & Field Operations", "Explain missing drone provider requirements.", "field-visit", ["drone provider blocked", "drone status"], ["Review provider gaps"], ["Provider, credentials, compliance."], ["Blocked status"], ["Dispatch drone"], ["Drone provider"], ["Blocked until configured."]),

    workspace("communications-home", "Communications Home", "Communications", "Prepare email, SMS, WhatsApp, phone, Telegram, and notifications.", "communications", ["communications", "message", "contact"], ["Choose draft channel", "Review confirmation gate"], ["Recipient display, purpose, message draft, language."], ["Draft preparation"], ["Send silently"], ["Communications provider"], ["Explicit confirmation required before sending."]),
    workspace("message-prep", "Message Preparation", "Communications", "Prepare local-safe outbound message drafts across email, SMS, WhatsApp, provider, marketplace, logistics, workforce, admin, and drone lanes.", "communications", ["prepare message", "can nexus message them", "draft message"], ["Choose channel", "Review recipient", "Create local receipt"], ["Recipient, channel, purpose, language, consent context."], ["Message draft"], ["Send silently", "Fake delivery"], ["Communication provider"], ["No external message is sent without credentials, consent, confirmation, and provider verification."]),
    workspace("email-prep", "Email Preparation", "Communications", "Prepare an email draft.", "email", ["prepare email", "email prep"], ["Draft email", "Review recipient"], ["Recipient, subject, purpose, language."], ["Email draft"], ["Send email"], ["Email provider"], ["No email sent without provider and confirmation."]),
    workspace("sms-prep", "SMS Preparation", "Communications", "Prepare SMS draft.", "sms", ["prepare sms", "sms", "text message"], ["Draft SMS", "Review recipient"], ["Recipient display, purpose, message."], ["SMS draft"], ["Send SMS"], ["SMS provider"], ["No silent SMS."]),
    workspace("whatsapp-prep", "WhatsApp Preparation", "Communications", "Prepare WhatsApp draft.", "whatsapp", ["prepare whatsapp", "whatsapp"], ["Draft message", "Review provider status"], ["Recipient display, message, language."], ["WhatsApp draft"], ["Send WhatsApp"], ["WhatsApp provider"], ["No WhatsApp sent without confirmation."]),
    workspace("notification-prep", "Notification Preparation", "Communications", "Prepare notification or call script.", "phone", ["phone call", "prepare call", "telegram", "notification"], ["Prepare script", "Review gate"], ["Recipient, purpose, language, urgency."], ["Script/draft"], ["Place call"], ["Phone/notification provider"], ["No call or notification without gates."]),
    workspace("provider-message-prep", "Provider Message Preparation", "Communications", "Prepare provider follow-up messages for review.", "provider-support", ["prepare provider message", "provider follow-up message"], ["Draft provider message", "Review consent"], ["Recipient, purpose, summary, consent status."], ["Provider message draft"], ["Contact provider"], ["Provider messaging connector"], ["No provider contact without consent, credentials, and confirmation."]),
    workspace("clinic-message-prep", "Clinic Message Preparation", "Communications", "Prepare clinic messages for review.", "provider-support", ["prepare clinic message", "email the clinic", "message clinic"], ["Draft clinic message", "Review health boundary"], ["Clinic, reason, summary, preferred language."], ["Clinic message draft"], ["Contact clinic"], ["Clinic/provider connector"], ["No clinic message sent without gates."]),
    workspace("pharmacy-message-prep", "Pharmacy Message Preparation", "Communications", "Prepare pharmacy support messages without fulfillment claims.", "pharmacy-support", ["prepare pharmacy message", "message pharmacy", "pharmacy support message"], ["Draft pharmacy message", "Review medication safety note"], ["Pharmacy, medication concern, question."], ["Pharmacy message draft"], ["Request refill", "Contact pharmacy"], ["Pharmacy connector"], ["No prescribing, refill, or pharmacy fulfillment."]),
    workspace("mobile-clinic-message-prep", "Mobile Clinic Message Preparation", "Communications", "Prepare mobile clinic support messages without dispatch.", "mobile-clinic", ["text mobile clinic", "message mobile clinic", "mobile clinic message"], ["Draft mobile clinic message", "Review service area"], ["Service need, area, urgency, contact plan."], ["Mobile clinic message draft"], ["Dispatch mobile clinic"], ["Mobile clinic connector"], ["No mobile clinic dispatch."]),
    workspace("marketplace-message-prep", "Marketplace Message Preparation", "Communications", "Prepare buyer/seller marketplace messages without contact or payment.", "agritrade", ["message buyer", "message seller", "whatsapp seller", "marketplace message"], ["Draft buyer/seller message", "Review transaction gate"], ["Buyer/seller, product, order context."], ["Marketplace message draft"], ["Contact buyer/seller", "Create order", "Process payment"], ["Marketplace connector"], ["No buyer/seller contact or payment without gates."]),
    workspace("logistics-message-prep", "Logistics Message Preparation", "Communications", "Prepare shipment and route update messages.", "logistics", ["notify logistics", "message driver", "shipment message"], ["Draft logistics message", "Review shipment details"], ["Shipment, route, driver/logistics provider."], ["Logistics message draft"], ["Dispatch carrier", "Claim live tracking"], ["Logistics connector"], ["No carrier dispatch or fake live tracking."]),
    workspace("workforce-message-prep", "Workforce Message Preparation", "Communications", "Prepare employer, applicant, learner, or training referral messages.", "jobs", ["draft employer referral", "message employer", "workforce message"], ["Draft workforce message", "Review referral consent"], ["Employer/applicant, role, training or referral purpose."], ["Workforce message draft"], ["Submit application", "Contact employer"], ["Workforce partner connector"], ["No employer referral submission without gates."]),
    workspace("drone-message-prep", "Drone Coordination Message Preparation", "Communications", "Prepare drone coordination messages without dispatch or flight approval.", "field-visit", ["message drone provider", "drone coordination message"], ["Draft drone coordination message", "Review flight boundary"], ["Field, purpose, operator/provider."], ["Drone coordination draft"], ["Dispatch drone", "Approve flight"], ["Drone provider connector"], ["No drone flight or field dispatch."]),
    workspace("admin-review-message-prep", "Admin Review Message Preparation", "Communications", "Prepare local admin/review queue messages.", "resource-assistant", ["send message to admin review", "admin review message"], ["Queue local review message", "Create receipt"], ["Review queue, purpose, risk notes."], ["Local review message"], ["External send"], ["Admin review queue"], ["Local review only unless a provider connector is configured."]),

    workspace("provider-activation-home", "Provider Activation Home", "Provider Activation", "Review connection, credential, service, database, live knowledge, maps, payments, telehealth, logistics, and drone readiness.", "resource-assistant", ["provider readiness", "activate providers", "what is connected", "internet services"], ["Review readiness", "Show missing env names"], ["Target provider or lane."], ["Readiness status"], ["Expose secrets", "Execute provider"], ["Provider credentials"], ["Secret values are never shown."]),
    workspace("credential-status", "Credential Status", "Provider Activation", "Show credential-missing status by environment variable name only.", "resource-assistant", ["credential status", "missing credentials"], ["Review env names"], ["Provider name."], ["Missing-config status"], ["Show secret values"], ["Provider credentials"], ["Env names only."]),
    workspace("service-readiness", "Service Readiness", "Provider Activation", "Review service readiness and blocked lanes.", "resource-assistant", ["service readiness", "provider services"], ["Review lanes"], ["Service category."], ["Readiness summary"], ["Execute service"], ["Provider connector"], ["Execution remains gated."]),
    workspace("database-readiness", "Database Readiness", "Provider Activation", "Review production database persistence status.", "resource-assistant", ["database status", "database readiness"], ["Check DB status"], ["Environment/config."], ["Readiness status"], ["Claim persistence without DB"], ["Production database"], ["Local storage is not production persistence."]),
    workspace("live-knowledge-readiness", "Live Knowledge Readiness", "Provider Activation", "Review live knowledge provider readiness.", "resource-assistant", ["live knowledge readiness", "internet services"], ["Check provider", "Show missing env"], ["Provider selection."], ["Knowledge status"], ["Fake citations"], ["Tavily/Brave/Exa/generic"], ["No fake citations."]),
    workspace("maps-readiness", "Maps Readiness", "Provider Activation", "Review maps provider readiness.", "maps", ["map provider status", "maps readiness"], ["Check maps"], ["API key/provider."], ["Maps status"], ["Request geolocation"], ["Maps provider"], ["No geolocation request."]),
    workspace("payments-readiness", "Payments Readiness", "Provider Activation", "Review payment provider readiness.", "payment-gate", ["payment status", "payments readiness"], ["Check payment gate"], ["Provider/sandbox."], ["Payment blocked status"], ["Process payment"], ["Payment provider"], ["Sandbox/approval required."]),
    workspace("telehealth-readiness", "Telehealth Readiness", "Provider Activation", "Review telehealth provider readiness.", "telehealth-intake", ["telehealth status", "telehealth readiness"], ["Check telehealth"], ["Provider/vendor."], ["Telehealth status"], ["Book/launch visit"], ["Telehealth provider"], ["No clinician connected unless provider succeeds."]),
    workspace("logistics-provider-readiness", "Logistics Provider Readiness", "Provider Activation", "Review logistics/tracking provider readiness.", "logistics", ["logistics provider readiness", "tracking provider"], ["Check logistics"], ["Provider/vendor."], ["Logistics status"], ["Dispatch carrier"], ["Logistics provider"], ["No dispatch/tracking claim without provider."]),
    workspace("drone-provider-readiness", "Drone Provider Readiness", "Provider Activation", "Review drone provider readiness.", "field-visit", ["drone provider readiness", "drone status"], ["Check drone provider"], ["Vendor/compliance."], ["Drone status"], ["Dispatch drone"], ["Drone provider"], ["No flight dispatch."]),

    workspace("admin-review-home", "Admin / Review Home", "Admin/Review", "Open review queues and receipts audit.", "resource-assistant", ["admin review", "review home"], ["Review queues", "Audit receipts"], ["Queue or receipt type."], ["Review status"], ["Bypass approval"], ["Admin credentials"], ["Review-only in Standard User."]),
    workspace("provider-queue", "Provider Queue", "Admin/Review", "Review provider packets.", "provider-support", ["provider queue"], ["Open queue"], ["Packet type."], ["Queue preview"], ["Submit provider referral"], ["Provider connector"], ["Requires approval."]),
    workspace("marketplace-review", "Marketplace Review", "Admin/Review", "Review marketplace packets.", "agritrade", ["marketplace review"], ["Review marketplace queue"], ["Product/order."], ["Review preview"], ["Execute order"], ["Marketplace provider"], ["Requires approval."]),
    workspace("health-review", "Health Review", "Admin/Review", "Review health packets.", "provider-support", ["health review"], ["Review health queue"], ["Case context."], ["Review preview"], ["Clinical decision"], ["Clinical provider"], ["Clinician review required."]),
    workspace("workforce-review", "Workforce Review", "Admin/Review", "Review workforce packets.", "jobs", ["workforce review"], ["Review workforce queue"], ["Applicant/job."], ["Review preview"], ["Submit referral"], ["Workforce partner"], ["Requires approval."]),
    workspace("receipts-audit", "Receipts Audit", "Admin/Review", "Review receipts and action history.", "resource-assistant", ["receipts audit", "action receipt", "what did nexus do"], ["Show receipts"], ["Recent action context."], ["Audit view"], ["Change history"], ["Audit store"], ["Local receipts are not provider verification."])
  ]);

  function workspace(id, title, modeGroup, shortDescription, routeTarget, supportedCommands, userCanDo, userNeedsToProvide, availableActions, blockedActions, providerRequirements, safetyNotes) {
    return {
      id,
      title,
      shortDescription,
      modeGroup,
      routeTarget,
      supportedCommands,
      userCanDo,
      userNeedsToProvide,
      availableActions,
      blockedActions: [...blockedActions, ...DEFAULT_BLOCKED_ACTIONS],
      providerRequirements,
      safetyNotes,
      examplePrompts: supportedCommands.slice(0, 4),
      statusLabel: providerRequirements?.length ? "Requires provider activation for live external action" : "Available now for local preparation",
      receiptType: `${id.replace(/-/g, "_")}_navigation_receipt`
    };
  }

  const EXACT_MODE_ALIASES = Object.freeze({
    "health": "health-home",
    "chronic-care": "chronic-care",
    "telehealth-intake": "patient-intake",
    "mobile-clinic": "mobile-clinic-routing-prep",
    "pharmacy-support": "pharmacy-routing-prep",
    "agriculture": "agriculture-home",
    "agritrade": "marketplace-home",
    "jobs": "workforce-home",
    "learning": "learning-home",
    "maps": "route-planning",
    "media": "communications-home",
    "reminders": "receipts-audit",
    "offline": "tracking-status",
    "activation-center": "provider-activation-home",
    "provider-access": "provider-activation-home",
    "provider-readiness": "provider-activation-home",
    "live-knowledge": "live-knowledge-readiness",
    "database": "database-readiness",
    "payments": "payments-readiness",
    "telehealth": "telehealth-readiness",
    "logistics": "logistics-home",
    "drone": "drone-home",
    "communications": "communications-home"
  });

  const ROUTE_PATTERNS = Object.freeze([
    [/\b(what can nexus do|what can you do|show me nexus modes|what is nexus)\b/, "global-explanation"],
    [/\b(what can i do here|explain this page|what happens next|why is this blocked|are you connected|can you do this)\b/, "workspace-explanation"],
    [/\b(chronic illness support|chronic care|chronic follow-up|health follow-up|diabetes|blood pressure|hypertension|obesity|rpm|rtm|community health worker|chw)\b/, "chronic-care"],
    [/\b(heat illness|heat risk|sick from heat)\b/, "heat-risk"],
    [/\b(patient intake|telehealth intake|start.*intake|symptom intake)\b/, "patient-intake"],
    [/\b(provider help|provider referral|care team|provider bridge)\b/, "provider-referral-prep"],
    [/\b(pharmacy|medicine|medication|refill)\b/, "pharmacy-routing-prep"],
    [/\b(mobile clinic|clinic outreach|community clinic|route to a mobile clinic)\b/, "mobile-clinic-routing-prep"],
    [/\b(crop problem|crop issue|plants are sick|pest problem|pest|disease|soil problem|harvest help|tomato blight|blight)\b/, "crop-support"],
    [/\b(irrigation|water stress|dry soil)\b/, "irrigation-support"],
    [/\b(farm profile|farm planning|season plan)\b/, "farm-profile"],
    [/\b(research agriculture|current best practices|source.*crop|live knowledge.*agriculture)\b/, "live-knowledge-agriculture"],
    [/\b(drone support|field survey|drone mission|crop imaging|flight checklist)\b/, "mission-planner"],
    [/\b(i want to buy|buyer support|buy crop|buyer workspace)\b/, "buyer-workspace"],
    [/\b(i want to sell|seller support|sell crop|seller workspace)\b/, "seller-workspace"],
    [/\b(create listing|produce listing|listing workspace)\b/, "listing-workspace"],
    [/\b(cancel order|add to transaction|add to order|order support|transaction)\b/, "order-transaction-prep"],
    [/\b(dispute|refund issue|escalate marketplace)\b/, "dispute-escalation-prep"],
    [/\b(marketplace help|marketplace|agritrade)\b/, "marketplace-home"],
    [/\b(track shipment|where is my shipment|shipment|tracking status)\b/, "shipment-workspace"],
    [/\b(plan route|map route|route planning|field visit|farm visit)\b/, "route-planning"],
    [/\b(delivery status|delivery confirmation|confirm delivery)\b/, "delivery-confirmation"],
    [/\b(logistics help|cold chain|cold-chain|delivery help)\b/, "logistics-home"],
    [/\b(training|course|learn|learning|agriculture training)\b/, "learning-home"],
    [/\b(job help|find work|workforce|farm jobs|resume|interview|employer match|job readiness|skills checklist)\b/, "workforce-home"],
    [/\b(prepare email|email prep|email)\b/, "email-prep"],
    [/\b(prepare sms|sms|text message)\b/, "sms-prep"],
    [/\b(prepare whatsapp|whatsapp)\b/, "whatsapp-prep"],
    [/\b(prepare phone call|phone call|telegram|notification)\b/, "notification-prep"],
    [/\b(what is connected|provider readiness|internet services|activate providers|credential status|database status|payment status|telehealth status|map provider status)\b/, "provider-activation-home"],
    [/\b(receipts audit|action receipt|what did nexus do)\b/, "receipts-audit"],
    [/\b(health help|health support|care help)\b/, "health-home"],
    [/\b(agriculture|farm support|farm help)\b/, "agriculture-home"]
  ]);

  function normalizeText(input) {
    return String(input || "").toLowerCase().replace(/[“”]/g, "\"").replace(/[‘’]/g, "'").trim();
  }

  function workspaceById(id) {
    return WORKSPACES.find(item => item.id === id) || null;
  }

  function route(input = "", options = {}) {
    const rawInput = String(input || "");
    const normalized = normalizeText(rawInput);
    const inputType = options.inputType || "text";
    const sourceElement = options.sourceElement || "";
    const explicit = normalizeText(options.workspaceId || options.modeId || options.routeTarget || "").replace(/^sidebar-/, "").replace(/^core-/, "");
    const aliasTarget = explicit ? EXACT_MODE_ALIASES[explicit] || explicit : "";
    let matchedWorkspace = workspaceById(aliasTarget);
    let kind = "route";
    let fallbackReason = "";
    if (!matchedWorkspace) {
      for (const [pattern, target] of ROUTE_PATTERNS) {
        if (pattern.test(normalized)) {
          if (target === "global-explanation" || target === "workspace-explanation") {
            kind = target;
            matchedWorkspace = target === "workspace-explanation"
              ? workspaceById(EXACT_MODE_ALIASES[normalizeText(options.currentWorkspaceId || options.currentModeId || "")] || normalizeText(options.currentWorkspaceId || options.currentModeId || ""))
              : null;
          } else {
            matchedWorkspace = workspaceById(target);
          }
          break;
        }
      }
    }
    if (!matchedWorkspace && !kind.includes("explanation")) {
      fallbackReason = "No deterministic workspace match found. Nexus will show the global capability explanation.";
    }
    const routeTarget = matchedWorkspace?.routeTarget || (kind === "global-explanation" ? "resource-assistant" : "");
    const safetyLevel = matchedWorkspace?.blockedActions?.some(action => /payment|dispatch|call|message|pharmacy|medical|location|drone/i.test(action)) ? "gated" : "local";
    return {
      rawInput,
      normalizedInput: normalized,
      inputType,
      sourceElement,
      matchedMode: matchedWorkspace?.modeGroup || "",
      matchedMiniApp: matchedWorkspace?.id || "",
      routeTarget,
      confidence: matchedWorkspace ? 0.92 : kind.includes("explanation") ? 0.9 : 0.35,
      requiredAction: kind === "global-explanation" ? "explain_global_capability" : kind === "workspace-explanation" ? "explain_workspace" : matchedWorkspace ? "open_workspace" : "show_global_capabilities",
      safetyLevel,
      explanationRequired: kind.includes("explanation") || Boolean(options.explanationRequired),
      providerRequired: Boolean(matchedWorkspace?.providerRequirements?.length),
      fallbackReason,
      timestamp: new Date().toISOString(),
      workspace: matchedWorkspace,
      kind
    };
  }

  function globalExplanation() {
    return {
      type: "global",
      title: "What Nexus can do",
      message: "I am Nexus, your AgriNexus assistant. I can help you navigate health, agriculture, marketplace, logistics, learning, workforce, drone, provider, and communication workflows. I can open the right workspace, collect missing information, recommend next steps, prepare actions, save local records where memory is active, and create receipts. Live actions such as payments, telehealth, SMS, provider referrals, shipment tracking, pharmacy routing, and drone dispatch require connected providers. I will tell you clearly when something is available, local, queued, requires review, requires credentials, blocked, completed and verified, or failed.",
      interactionModel: ["Click a mode", "Type Ask Nexus", "Speak through the user-initiated mic when supported", "Open receipts or saved records"],
      capabilityStates: CAPABILITY_STATES,
      noExecutionAuthorized: true
    };
  }

  function workspaceExplanation(workspaceId = "") {
    const item = workspaceById(workspaceId) || workspaceById(EXACT_MODE_ALIASES[normalizeText(workspaceId)] || "");
    if (!item) return globalExplanation();
    return {
      type: "workspace",
      id: item.id,
      title: item.title,
      message: `${item.title}: ${item.shortDescription}`,
      userCanDo: item.userCanDo,
      userNeedsToProvide: item.userNeedsToProvide,
      availableActions: item.availableActions,
      blockedActions: item.blockedActions,
      providerRequirements: item.providerRequirements,
      safetyNotes: item.safetyNotes,
      recommendedNextStep: item.userCanDo[0] || "Tell Nexus what you need next.",
      statusLabel: item.statusLabel,
      noExecutionAuthorized: true
    };
  }

  function predictiveSuggestionRoute(suggestion = {}) {
    const text = suggestion.command || suggestion.title || suggestion.label || suggestion.text || "";
    return route(text, { inputType: "suggestion", sourceElement: suggestion.id || "predictive-suggestion", currentWorkspaceId: suggestion.workspaceId || "" });
  }

  function providerReadinessRoute(provider = {}) {
    const providerId = normalizeText(provider.id || provider.providerId || provider.label || provider.name || "");
    const target = /database/.test(providerId) ? "database-readiness"
      : /payment|stripe|pay/.test(providerId) ? "payments-readiness"
        : /map|route/.test(providerId) ? "maps-readiness"
          : /telehealth|daily|video/.test(providerId) ? "telehealth-readiness"
            : /logistics|tracking|shipment/.test(providerId) ? "logistics-provider-readiness"
              : /drone|dji/.test(providerId) ? "drone-provider-readiness"
                : /knowledge|tavily|brave|exa|internet/.test(providerId) ? "live-knowledge-readiness"
                  : "provider-activation-home";
    return route(target, { inputType: "providerCard", sourceElement: providerId, routeTarget: target });
  }

  function savedRecordRoute(record = {}) {
    return route(record.command || record.title || record.type || "", {
      inputType: record.receiptType ? "receipt" : "savedRecord",
      sourceElement: record.id || record.recordId || ""
    });
  }

  return Object.freeze({
    CAPABILITY_STATES,
    WORKSPACES,
    EXACT_MODE_ALIASES,
    route,
    workspaceById,
    globalExplanation,
    workspaceExplanation,
    predictiveSuggestionRoute,
    providerReadinessRoute,
    savedRecordRoute
  });
});
