"use strict";
// Pure draft generators recovered from NexusOS fa0614ce; persistence and providers are owned by AgriNexus.

function htmlEscape(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function safeSlug(value) {
  return String(value || "nexusos-output")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64) || "nexusos-output";
}

function titleCase(value) {
  return String(value || "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, char => char.toUpperCase())
    .trim();
}

function inferBusiness(body) {
  const request = String(body.request || "").trim();
  const objective = String(body.objective || "").trim();
  const audience = String(body.audience || "").trim();
  const combined = [request, objective, audience].filter(Boolean).join(" ");
  const nameMatch = combined.match(/(?:business named|called|for)\s+([A-Z][A-Za-z0-9&' ]{2,40})/);
  const lower = combined.toLowerCase();
  const industries = [
    ["detailing", "Mobile Detailing"],
    ["cleaning", "Cleaning Service"],
    ["catering", "Catering"],
    ["lawn", "Lawn Care"],
    ["barber", "Barber / Grooming"],
    ["beauty", "Beauty Services"],
    ["trucking", "Trucking / Logistics"],
    ["daycare", "Childcare"],
    ["fitness", "Fitness Coaching"],
    ["nonprofit", "Nonprofit"],
    ["farm", "Agriculture"],
    ["consult", "Consulting"]
  ];
  const industry = body.industry || (industries.find(([needle]) => lower.includes(needle))?.[1] || "Local Service Business");
  const locationMatch = combined.match(/\bin\s+([A-Z][A-Za-z '-]{2,40})(?:\.|,|$)/);
  const location = body.location || (locationMatch ? locationMatch[1].trim() : "the local community");
  const businessName = body.businessName || (nameMatch ? nameMatch[1].trim() : `${location === "the local community" ? "Local" : location} ${industry}`);
  const customer = body.customer || audience || "local customers who need reliable, professional help";
  const problem = body.problem || "customers need a trustworthy provider, clear information, easy booking, and consistent follow-up";
  return {
    businessName: titleCase(businessName),
    slug: safeSlug(businessName),
    industry,
    location,
    customer,
    problem,
    request: request || "Build a launch-ready business kit.",
    objective: objective || "Launch the business and start getting customers.",
    audience: audience || "new small business owner"
  };
}

function businessLaunchKit(info) {
  return `# ${info.businessName} Launch Kit

## Business Snapshot

${info.businessName} is a ${info.industry.toLowerCase()} serving ${info.location}. The business helps ${info.customer} solve this problem: ${info.problem}.

## Core Offer

- Starter service: entry-level offer that makes it easy for a new customer to say yes.
- Signature service: the main package the business should be known for.
- Premium service: higher-value option for customers who want full support.

## Ideal Customer

The ideal customer is someone in ${info.location} who wants convenience, trust, clear pricing, and a professional experience.

## Brand Promise

Reliable service, clear communication, and results customers can feel confident recommending.

## Website Plan

1. Home: explain the offer and make the call to action obvious.
2. Services: list packages and benefits.
3. About: build trust with the owner story.
4. FAQ: answer common questions.
5. Contact: make it easy to call, text, book, or request a quote.

## Social Media Plan

Post around four content pillars:

1. Education: tips and answers.
2. Proof: before/after, testimonials, results.
3. Trust: behind the scenes, owner story, process.
4. Offers: promotions, booking reminders, seasonal pushes.

## AI Customer Assistant Plan

The assistant should greet visitors, explain services, answer common questions, collect name/contact/service need/location, and route serious questions to the owner.

## Phone Assistant Plan

The phone assistant should answer or support calls with a clear greeting, collect the customer's name, service need, location, timing, and follow-up number, then summarize the call for the owner. Missed calls should receive a friendly text response within minutes.

## First 30 Days

Week 1: finalize offer, pricing, and website copy.
Week 2: launch website and social profiles.
Week 3: post daily content and begin outreach.
Week 4: collect testimonials, improve offers, and follow up with leads.

## First Move

Publish the website, create three launch posts, and personally contact the first 25 likely customers or referral partners.
`;
}

function websiteHtml(info) {
  info = Object.fromEntries(Object.entries(info).map(([key, value]) => [key, htmlEscape(value)]));
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${info.businessName}</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="hero">
    <nav><strong>${info.businessName}</strong><a href="#contact">Request a quote</a></nav>
    <div class="hero-inner">
      <p class="eyebrow">${info.industry} in ${info.location}</p>
      <h1>Reliable help for customers who want the job done right.</h1>
      <p>${info.businessName} helps ${info.customer} with professional service, clear communication, and easy next steps.</p>
      <a class="button" href="#contact">Get started</a>
    </div>
  </header>
  <main>
    <section>
      <p class="eyebrow">What we solve</p>
      <h2>${info.problem}</h2>
      <p>We make it easier to understand the service, choose the right option, and get a response without confusion.</p>
    </section>
    <section class="grid">
      <article><h3>Starter</h3><p>Simple entry service for first-time customers.</p></article>
      <article><h3>Signature</h3><p>The main package for the best balance of value and results.</p></article>
      <article><h3>Premium</h3><p>Full-service support for customers who want the complete experience.</p></article>
    </section>
    <section>
      <p class="eyebrow">Why customers choose us</p>
      <h2>Professional service, local trust, and clear follow-up.</h2>
      <p>Use this section for testimonials, before-and-after results, certifications, or a short owner story.</p>
    </section>
    <section id="contact" class="contact">
      <p class="eyebrow">Next step</p>
      <h2>Request a quote or ask a question.</h2>
      <form>
        <input placeholder="Name">
        <input placeholder="Phone or email">
        <textarea placeholder="What do you need help with?"></textarea>
        <p>This is a draft contact form. Connect an approved intake endpoint before publishing.</p>
        <button type="button" disabled>Draft form</button>
      </form>
    </section>
  </main>
</body>
</html>`;
}

function websiteCss() {
  return `:root{--ink:#172d28;--muted:#667a73;--green:#1b8f68;--bg:#f6f7f1;--line:#dbe4df}*{box-sizing:border-box}body{margin:0;font-family:Segoe UI,Arial,sans-serif;color:var(--ink);background:var(--bg);line-height:1.5}nav{display:flex;justify-content:space-between;align-items:center;padding:22px 6vw}nav a,.button,button{background:var(--green);color:white;text-decoration:none;border:0;border-radius:8px;padding:12px 16px;font-weight:800}.hero{min-height:76vh;background:linear-gradient(135deg,#f6f7f1,#dfeee7)}.hero-inner{padding:70px 6vw;max-width:900px}.eyebrow{color:var(--green);font-weight:900;text-transform:uppercase;font-size:.82rem}h1{font-size:clamp(2.4rem,6vw,5.7rem);line-height:.95;margin:12px 0 22px}h2{font-size:clamp(1.8rem,4vw,3.2rem);line-height:1.05;margin:8px 0 16px}section{padding:64px 6vw;border-top:1px solid var(--line)}.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}article{background:white;border:1px solid var(--line);border-radius:8px;padding:22px}.contact{background:white}form{display:grid;gap:12px;max-width:620px}input,textarea{padding:14px;border:1px solid var(--line);border-radius:8px;font:inherit}@media(max-width:800px){.grid{grid-template-columns:1fr}nav{align-items:flex-start;gap:12px;flex-direction:column}}`;
}

function socialCalendar(info) {
  const rows = ["Day,Platform,Post Type,Caption,Call To Action"];
  const ideas = [
    ["1", "Facebook", "Introduction", `Meet ${info.businessName}: ${info.industry.toLowerCase()} built for ${info.location}.`, "Message us for details"],
    ["2", "Instagram", "Education", `3 signs it is time to book a reliable ${info.industry.toLowerCase()} provider.`, "Save this post"],
    ["3", "TikTok/Reels", "Behind the scenes", "Show the process, tools, setup, or owner preparation.", "Follow for more"],
    ["4", "Facebook", "Offer", "Now accepting new customers this week.", "Request a quote"],
    ["5", "Instagram", "Trust", "Share a customer result, testimonial, or owner story.", "Send a DM"],
    ["6", "LinkedIn", "Business story", `Why ${info.businessName} was created for ${info.customer}.`, "Connect with us"],
    ["7", "All", "Weekly recap", "What we worked on this week and what openings are available.", "Book now"]
  ];
  ideas.forEach(row => rows.push(row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(",")));
  return rows.join("\n");
}

function assistantPrompt(info) {
  return `# ${info.businessName} Customer AI Assistant

## Role

You are the customer assistant for ${info.businessName}, a ${info.industry.toLowerCase()} serving ${info.location}.

## Tone

Friendly, clear, professional, and helpful.

## Main Jobs

1. Greet customers.
2. Explain services.
3. Answer common questions.
4. Collect lead information.
5. Help customers request a quote or appointment.
6. Escalate anything urgent or unusual to the owner.

## Lead Intake Questions

- What is your name?
- What service do you need?
- What city or area are you in?
- When do you need help?
- What is the best phone number or email for follow-up?

## Sample Greeting

Hi, thanks for contacting ${info.businessName}. I can help answer questions, explain services, and collect the details needed for a quote.

## Escalation Rules

Escalate to the owner when a customer asks about custom pricing, complaints, urgent timing, partnerships, refunds, or anything outside the standard offer.
`;
}

function phoneAssistantScript(info) {
  return `# ${info.businessName} Phone Assistant Workflow

## Purpose

Help ${info.businessName} answer calls, capture leads, route urgent issues, and follow up professionally.

## Phone Greeting

Thank you for calling ${info.businessName}. I can help answer basic questions, collect details for a quote, or help request an appointment.

## Call Intake Questions

1. May I have your name?
2. What service are you calling about?
3. What city or area are you located in?
4. When do you need the service?
5. What is the best phone number for follow-up?
6. Is there anything urgent the owner should know?

## Quote Request Flow

I can collect the information needed for a quote. Please share the service you need, a short description of the job, your location, preferred timing, and whether you want a call or text back.

## Appointment Request Flow

I can collect your preferred time and send it to the owner for confirmation. What day works best, what time window do you prefer, and what service do you need?

## Missed-Call Text

Hi, this is ${info.businessName}. Sorry we missed your call. How can we help you today? You can reply with the service you need, your location, and the best time to follow up.

## Follow-Up Text

Hi, this is ${info.businessName} following up on your request. We have your information and will confirm the next step shortly. Thank you for reaching out.

## Voicemail Script

Thank you for calling ${info.businessName}. We are sorry we missed your call. Please leave your name, phone number, the service you need, your location, and the best time to reach you. We will follow up as soon as possible.

## Urgent Escalation Rules

Escalate to the owner immediately when a customer is upset, asks for a refund, has urgent timing, asks for custom pricing, reports a safety issue, asks about partnerships, or requests something outside standard services.

## Owner Handoff Summary

Customer:
Phone:
Service requested:
Location:
Preferred timing:
Urgency:
Notes:
Recommended next step:
`;
}

function aiAssistantSystem(info) {
  return `# ${info.businessName} AI Assistant System

## Assistant Overview

The AI assistant system helps ${info.businessName} communicate, market, follow up, and stay organized.

Recommended assistant name: ${info.businessName} Assistant

Tone: friendly, clear, professional, helpful, and local.

## Social Media Assistant

### Jobs

- create weekly post ideas
- write captions
- suggest hashtags
- create short video ideas
- promote offers
- share customer education
- create testimonial and proof posts

### Content Pillars

1. Helpful tips for ${info.customer}.
2. Proof of quality and reliability.
3. Behind-the-scenes owner/process content.
4. Offers, openings, and booking reminders.

### Weekly Rhythm

- Monday: helpful tip
- Tuesday: service explanation
- Wednesday: proof or customer story
- Thursday: behind the scenes
- Friday: offer or booking reminder

## Lead Research Assistant

### Ideal Leads

People or organizations in ${info.location} who need ${info.industry.toLowerCase()} and value reliable service.

### Where To Research

- local Facebook groups
- Google Maps business categories
- community pages
- chambers of commerce
- neighborhood associations
- referral partners
- local events

### Outreach Criteria

Only contact people or organizations where the service is relevant. Avoid spam, private data scraping, and mass messaging without permission.

## Customer Communication Assistant

### Greeting

Thanks for contacting ${info.businessName}. I can help answer questions, explain services, and collect details for a quote.

### Quote Follow-Up

Hi, this is ${info.businessName}. I’m following up on your quote request. Do you still need help, and would you like us to confirm the next available time?

### Appointment Confirmation

Your request has been received. We will confirm the final appointment time and any details needed before service.

### Review Request

Thank you for choosing ${info.businessName}. If you were happy with the service, a quick review would really help the business grow.

## Website Chat Assistant

### Main Jobs

- explain services
- answer FAQs
- collect customer name and contact
- collect service need and location
- route urgent or custom requests to the owner

### Lead Intake Questions

1. What is your name?
2. What service do you need?
3. What city or area are you in?
4. When do you need service?
5. What is the best phone or email for follow-up?

## Phone Assistant

Use the dedicated Phone Assistant Workflow file for call scripts, missed-call text, voicemail, and owner handoff.

## Follow-Up Assistant

### Lead Stages

1. New lead
2. Contacted
3. Quote sent
4. Booked
5. Completed
6. Review requested
7. Recontact later

### Follow-Up Timing

- New lead: same day
- Quote sent: next day
- No response: 3 days later
- Completed job: same day thank-you
- Review request: 1 day after completion

## Escalation Rules

Escalate to the owner when the customer asks for refunds, custom pricing, urgent timing, complaints, safety concerns, partnerships, bulk service, or anything outside standard services.

## Weekly Operating Routine

Monday: plan posts and review leads.
Tuesday: send follow-ups and publish education content.
Wednesday: post proof/testimonial content.
Thursday: research referral partners.
Friday: publish offer and review open leads.
Weekend: respond to missed messages and prepare next week.
`;
}

function outreachScripts(info) {
  return `# ${info.businessName} Outreach Scripts

## Text Message

Hi, this is ${info.businessName}. We are now helping customers in ${info.location} with ${info.industry.toLowerCase()}. If you or someone you know needs reliable service, I would be glad to send details.

## Facebook Post

We are excited to introduce ${info.businessName}, a local ${info.industry.toLowerCase()} focused on reliable service, clear communication, and professional results. We are now accepting new customers in ${info.location}. Message us to request a quote.

## Referral Ask

If you know someone who needs ${info.industry.toLowerCase()}, please send them our way. We are building through trust, referrals, and strong service.

## Follow-Up

Hi, just following up to see if you still need help. I can answer questions, explain options, or help you choose the right service.
`;
}

function defaultClientWorkspace(info) {
  const detail = { slug: safeSlug(info.businessName), businessName: String(info.businessName || "Business") };
  return {
    slug: detail.slug,
    businessName: detail.businessName,
    updatedAt: new Date().toISOString(),
    leads: [],
    transactions: [],
    invoices: [],
    invoiceItems: [],
    grants: [],
    socialPosts: [
      { platform: "Facebook", status: "draft", caption: `Meet ${detail.businessName}. We are helping local customers get reliable service with clear communication and easy next steps.` },
      { platform: "Instagram", status: "draft", caption: "Behind the scenes: a quick look at how we prepare to deliver a professional customer experience." },
      { platform: "Google Business", status: "draft", caption: "Now accepting new customers. Message us to ask a question or request a quote." }
    ],
    assistantScripts: {
      greeting: `Thanks for contacting ${detail.businessName}. I can answer questions, explain services, and collect details for a quote.`,
      leadCapture: "What service do you need, what city are you in, and what is the best phone or email for follow-up?",
      escalation: "I will send this to the owner so they can personally follow up."
    },
    tasks: [
      { title: "Review offer and pricing", status: "todo" },
      { title: "Publish first three social posts", status: "todo" },
      { title: "Test website chat greeting", status: "todo" },
      { title: "Call or text five warm leads", status: "todo" }
    ],
    landingPage: {
      headline: `${detail.businessName} helps local customers get reliable service without confusion.`,
      subheadline: "Clear communication, easy quotes, and professional follow-up from the first message.",
      offer: "Request a quote today",
      phone: "Add phone number",
      email: "Add email",
      proof: "Trusted local service with a simple process and responsive follow-up."
    },
    assistantStudio: {
      name: `${detail.businessName} AI Concierge`,
      purpose: "Help customers, capture leads, support phone and website inquiries, draft social posts, and keep the owner organized.",
      personality: "Friendly, clear, professional, patient, and locally trusted.",
      channels: [
        { name: "Website Chat", enabled: false, job: "Answer questions and collect lead details." },
        { name: "Phone", enabled: false, job: "Capture caller needs and route urgent issues." },
        { name: "SMS Follow-Up", enabled: false, job: "Send missed-call replies and quote follow-ups." },
        { name: "Social Media", enabled: false, job: "Draft captions, replies, and weekly content." },
        { name: "Email", enabled: false, job: "Draft longer customer replies and partner outreach." }
      ],
      knowledge: [
        "Business name, location, services, and primary offer.",
        "Lead intake questions: name, contact, service need, location, timing.",
        "Escalation rules for complaints, urgent needs, refunds, safety, and custom pricing.",
        "Brand promise: reliable service, clear communication, and easy next steps."
      ],
      workflows: [
        { name: "New Lead", trigger: "Customer asks for help", steps: "Greet, collect details, confirm need, send owner summary.", status: "draft" },
        { name: "Missed Call", trigger: "Call is missed", steps: "Send text, ask for need/location/timing, notify owner.", status: "draft" },
        { name: "Quote Follow-Up", trigger: "Quote sent but no reply", steps: "Follow up after 24 hours, then 72 hours.", status: "draft" },
        { name: "Review Request", trigger: "Service completed", steps: "Thank customer and ask for a review.", status: "draft" }
      ],
      testMessage: "Hi, I need a quote and want to know how soon someone can help me.",
      deployment: [
        { item: "Website chat script reviewed", done: false },
        { item: "Phone script approved", done: false },
        { item: "Lead handoff destination selected", done: false },
        { item: "Escalation rules approved", done: false },
        { item: "Owner tested three customer scenarios", done: false }
      ]
    }
  };
}

function normalizeWorkspace(info, workspace) {
  const starter = defaultClientWorkspace(info);
  return {
    ...starter,
    ...workspace,
    leads: workspace.leads || starter.leads,
    socialPosts: workspace.socialPosts || starter.socialPosts,
    assistantScripts: { ...starter.assistantScripts, ...(workspace.assistantScripts || {}) },
    tasks: workspace.tasks || starter.tasks,
    landingPage: { ...starter.landingPage, ...(workspace.landingPage || {}) },
    assistantStudio: {
      ...starter.assistantStudio,
      ...(workspace.assistantStudio || {}),
      channels: workspace.assistantStudio?.channels || starter.assistantStudio.channels,
      knowledge: workspace.assistantStudio?.knowledge || starter.assistantStudio.knowledge,
      workflows: workspace.assistantStudio?.workflows || starter.assistantStudio.workflows,
      deployment: workspace.assistantStudio?.deployment || starter.assistantStudio.deployment
    }
  };
}

function landingPageHtml(workspace) {
  const businessName = htmlEscape(workspace.businessName);
  const landing = workspace.landingPage || {};
  const posts = workspace.socialPosts || [];
  const tasks = workspace.tasks || [];
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${businessName}</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav><strong>${businessName}</strong><a href="#contact">Request help</a></nav>
    <section class="hero">
      <p class="eyebrow">Local business</p>
      <h1>${htmlEscape(landing.headline)}</h1>
      <p>${htmlEscape(landing.subheadline)}</p>
      <a class="button" href="#contact">${htmlEscape(landing.offer || "Request a quote")}</a>
    </section>
  </header>
  <main>
    <section class="proof">
      <p class="eyebrow">Why choose us</p>
      <h2>${htmlEscape(landing.proof)}</h2>
    </section>
    <section class="grid">
      ${posts.slice(0, 3).map(post => `<article><span>${htmlEscape(post.platform)}</span><p>${htmlEscape(post.caption)}</p></article>`).join("")}
    </section>
    <section class="grid">
      ${tasks.slice(0, 3).map(task => `<article><span>${htmlEscape(task.status)}</span><h3>${htmlEscape(task.title)}</h3><p>Part of the customer experience workflow.</p></article>`).join("")}
    </section>
    <section id="contact" class="contact">
      <p class="eyebrow">Contact</p>
      <h2>${htmlEscape(landing.offer || "Request a quote today")}</h2>
      <p>Phone: ${htmlEscape(landing.phone)}</p>
      <p>Email: ${htmlEscape(landing.email)}</p>
      <form>
        <input placeholder="Name">
        <input placeholder="Phone or email">
        <textarea placeholder="What do you need help with?"></textarea>
        <p>This is a draft contact form. Connect an approved intake endpoint before publishing.</p>
        <button type="button" disabled>Draft form</button>
      </form>
    </section>
  </main>
</body>
</html>`;
}

function landingPageCss() {
  return `:root{--ink:#14231f;--muted:#62736d;--line:#dce6e0;--green:#17845f;--bg:#f7f8f2}*{box-sizing:border-box}body{margin:0;font-family:Segoe UI,Arial,sans-serif;color:var(--ink);background:var(--bg);line-height:1.5}nav{display:flex;justify-content:space-between;align-items:center;padding:20px 6vw;background:white;border-bottom:1px solid var(--line)}nav a,.button,button{background:var(--green);color:white;text-decoration:none;border:0;border-radius:8px;padding:12px 16px;font-weight:800}.hero{padding:82px 6vw;max-width:1040px}.eyebrow,article span{color:var(--green);font-weight:900;text-transform:uppercase;font-size:.78rem}h1{font-size:clamp(2.4rem,6vw,5.5rem);line-height:.97;margin:10px 0 18px}h2{font-size:clamp(1.8rem,4vw,3.1rem);line-height:1.08;margin:8px 0 16px}.hero p{font-size:1.18rem;max-width:780px;color:var(--muted)}main section{padding:56px 6vw;border-top:1px solid var(--line)}.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}article{background:white;border:1px solid var(--line);border-radius:8px;padding:20px}.contact{background:white}form{display:grid;gap:12px;max-width:620px}input,textarea{padding:14px;border:1px solid var(--line);border-radius:8px;font:inherit}@media(max-width:820px){nav{align-items:flex-start;flex-direction:column;gap:12px}.grid{grid-template-columns:1fr}}`;
}

function assistantStudioPrompt(workspace) {
  const studio = workspace.assistantStudio;
  return `# ${studio.name} System Package

## Purpose

${studio.purpose}

## Personality

${studio.personality}

## Active Channels

${studio.channels.map(channel => `- ${channel.enabled ? "[ON]" : "[OFF]"} ${channel.name}: ${channel.job}`).join("\n")}

## Knowledge Base

${studio.knowledge.map(item => `- ${item}`).join("\n")}

## Core Workflows

${studio.workflows.map(flow => `### ${flow.name}

Trigger: ${flow.trigger}

Steps: ${flow.steps}

Status: ${flow.status}`).join("\n\n")}

## Escalation Standard

Escalate refunds, complaints, urgent timing, safety issues, custom pricing, legal/medical questions, bulk orders, and anything outside approved service information to the owner.

## Lead Capture Standard

Always collect the customer's name, contact, service need, location, timing, and preferred follow-up method before handing off to the owner.
`;
}

function testAssistantReply(workspace, message) {
  const studio = workspace.assistantStudio;
  const incoming = String(message || studio.testMessage || "").trim();
  const lower = incoming.toLowerCase();
  const wantsQuote = /quote|price|cost|estimate/.test(lower);
  const urgent = /today|now|urgent|asap|soon|emergency/.test(lower);
  const serviceLine = wantsQuote
    ? "I can help collect the details needed for a quote."
    : "I can help answer questions and get the right details to the owner.";
  const urgencyLine = urgent
    ? "Timing may be important. This preview does not notify the owner; prepare an approved handoff if appropriate."
    : "Once the basics are available, prepare a handoff for review. This preview sends nothing.";
  return `Hi, thanks for contacting ${workspace.businessName}. ${serviceLine}

To help you, may I get your name, best phone or email, service need, location, and when you need help?

${urgencyLine}

Owner handoff summary will include: customer name, contact, service requested, location, timing, urgency, and recommended next action.`;
}

function agenticPlan(body) {
  const request = String(body.request || body.needs || "").toLowerCase();
  const wantsFullBuild = /all|full|complete|everything|business|launch|website|assistant|social|phone|lead/.test(request);
  const steps = [
    { agent: "intake", action: "Structure the client request and identify business context." },
    { agent: "businessBuilder", action: "Create the business launch kit and client workspace." }
  ];
  if (wantsFullBuild || /landing|website|page/.test(request)) {
    steps.push({ agent: "landingPage", action: "Create a small-business landing page." });
  }
  if (wantsFullBuild || /assistant|ai|chat|bot/.test(request)) {
    steps.push({ agent: "assistantStudio", action: "Build, test, and package the AI assistant." });
  }
  if (wantsFullBuild || /social|marketing|post|content/.test(request)) {
    steps.push({ agent: "marketing", action: "Prepare social and outreach assets." });
  }
  if (wantsFullBuild || /lead|crm|follow/.test(request)) {
    steps.push({ agent: "crm", action: "Create lead pipeline and follow-up tasks." });
  }
  if (wantsFullBuild || /phone|sms|text|call/.test(request)) {
    steps.push({ agent: "phone", action: "Prepare phone assistant and SMS workflow." });
  }
  steps.push({ agent: "qa", action: "Verify generated assets and summarize next steps." });
  return steps;
}

function clientWorkflowOutput(info, action) {
  const detail = { businessName: info.businessName, websiteUrl: "website/index.html", path: "AgriNexus authenticated business workspace", files: [] };
  const now = new Date().toLocaleString();
  const actionLabels = {
    social: "Social Media Sprint",
    leads: "Lead Pipeline Sprint",
    followup: "Follow-Up Sprint",
    assistant: "AI Assistant Activation",
    phone: "Phone Assistant Activation",
    website: "Website Improvement Sprint"
  };
  const label = actionLabels[action] || "Client Workflow Sprint";
  const sections = {
    social: [
      "Create five posts: education, proof, trust, offer, and customer story.",
      "Turn one post into a short video script.",
      "Export the next seven days into the social calendar."
    ],
    leads: [
      "Define the top three customer types.",
      "Create a first-contact message, follow-up message, and referral ask.",
      "Track each lead as new, contacted, interested, booked, won, or lost."
    ],
    followup: [
      "Send a same-day reply to every open lead.",
      "Create a 24-hour follow-up and a 72-hour follow-up.",
      "Escalate urgent, high-value, or unhappy customers to the owner."
    ],
    assistant: [
      "Confirm greeting, service explanation, lead capture, and owner handoff.",
      "Add five frequently asked questions.",
      "Test the assistant with a price question, booking question, and complaint."
    ],
    phone: [
      "Use the phone script to collect name, need, location, timing, and callback number.",
      "Send missed-call text within minutes.",
      "Summarize every call for the owner with next action."
    ],
    website: [
      "Review headline, services, proof, contact options, and call to action.",
      "Make the booking action visible above the fold.",
      "Confirm the website reflects the current offer."
    ]
  };
  const steps = sections[action] || [
    "Review the current client assets.",
    "Choose the highest-value next workflow.",
    "Create the next asset and save it to the client workspace."
  ];
  return `# ${detail.businessName} - ${label}

Created: ${now}

Draft instructions only: no message, call or publication has occurred.

## Workflow Goal

Move ${detail.businessName} from generated assets into active execution.

## Action Steps

${steps.map((step, index) => `${index + 1}. ${step}`).join("\n")}

## Owner Dashboard

- Website: ${detail.websiteUrl}
- Client folder: ${detail.path}
- Review generated assets and recipient consent before execution.

## Success State

This workflow is ready when the owner can open the client workspace, see the next action, use the generated script or asset, and follow up with a real customer or lead.
`;
}


// Tool 9 of the small-business/nonprofit suite: document/form templates.
// The document-export backend (server/providers/exportProvider.js) was
// already real -- it genuinely renders PDF/DOCX -- but nothing in this
// workspace had actual contract/intake-form/checklist *content* to feed
// it. These are editable starting points, not legal documents; each one
// says so explicitly rather than implying a lawyer wrote it.
function serviceAgreementTemplate(info) {
  const now = new Date().toLocaleDateString();
  return `# Service Agreement (Template)

This is an editable template, not legal advice. Have a licensed attorney review it before use.

Prepared: ${now}

## Parties

This agreement is between ${info.businessName} ("Provider") and [Client name] ("Client").

## Scope of Services

Provider will perform the following services for Client: [describe the specific service, deliverables, and any exclusions].

## Term

This agreement begins on [start date] and ends on [end date or "upon completion of the services described above"].

## Payment

- Total fee: [amount]
- Payment schedule: [e.g., 50% deposit, 50% on completion]
- Late payment: [policy, if any]

## Client Responsibilities

Client agrees to provide [access, information, materials] needed for Provider to perform the services.

## Termination

Either party may terminate this agreement with [number] days' written notice. [Describe what happens to fees already paid or owed.]

## Signatures

Provider: _______________________  Date: _______
Client: _______________________  Date: _______
`;
}

function clientIntakeFormTemplate(info) {
  const now = new Date().toLocaleDateString();
  return `# Client Intake Form (Template)

${info.businessName} - prepared ${now}

## Contact Information

- Full name: ______________________
- Phone: ______________________
- Email: ______________________
- Preferred contact method: [ ] Phone  [ ] Text  [ ] Email

## Service Needed

- What do you need help with? ______________________
- When do you need this by? ______________________
- Location or address (if applicable): ______________________

## Additional Information

- How did you hear about ${info.businessName}? ______________________
- Anything else we should know? ______________________

## Consent

[ ] I consent to ${info.businessName} contacting me about this request and storing the information above.

Signature: _______________________  Date: _______
`;
}

function applicationChecklistTemplate(info) {
  const now = new Date().toLocaleDateString();
  return `# Application Checklist (Template)

${info.businessName} - prepared ${now}

Use this checklist to track what an applicant, new client, or new team member still needs to submit or complete.

- [ ] Application form completed
- [ ] Identification or verification documents received
- [ ] Signed agreement or consent form on file
- [ ] Payment or deposit received (if applicable)
- [ ] Orientation or intake call scheduled
- [ ] Welcome message or confirmation sent
- [ ] Added to active client/member records

## Notes

______________________
`;
}

module.exports = Object.freeze({ clientWorkflowOutput, htmlEscape, safeSlug, titleCase, inferBusiness, businessLaunchKit, websiteHtml, websiteCss, socialCalendar, assistantPrompt, phoneAssistantScript, aiAssistantSystem, outreachScripts, defaultClientWorkspace, normalizeWorkspace, landingPageHtml, landingPageCss, assistantStudioPrompt, testAssistantReply, agenticPlan, serviceAgreementTemplate, clientIntakeFormTemplate, applicationChecklistTemplate });
