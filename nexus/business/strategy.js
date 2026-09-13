"use strict";
// Recovered fa0614ce planning templates; workspace notes are supplied from the owner-bound record.
const agentProfiles = {
  coach: {
    name: "Nexus Prime",
    promise: "clarity, focus, and the next best move",
    sections: ["Situation", "Priority Read", "Highest-Value Move", "Action Plan", "NexusOS Memory"]
  },
  strategy: {
    name: "Strategy Agent",
    promise: "business model, direction, and decision support",
    sections: ["Strategic Read", "Best Path", "Risks", "Assumptions To Test", "Next Three Moves"]
  },
  investor: {
    name: "Investor Agent",
    promise: "funding story, investor Q&A, and pitch readiness",
    sections: ["Investor Story", "Proof Points", "Likely Questions", "Strong Answers", "Follow-Up Move"]
  },
  product: {
    name: "Product Agent",
    promise: "feature planning, roadmap, and user workflows",
    sections: ["User Need", "Workflow", "Product Gap", "Build Recommendation", "Test Steps"]
  },
  operations: {
    name: "Operations Agent",
    promise: "daily execution, weekly priorities, and follow-up control",
    sections: ["Priority Stack", "Today", "This Week", "People To Contact", "Open Loops"]
  },
  research: {
    name: "Research Agent",
    promise: "market, country, competitor, and funding research framing",
    sections: ["Research Question", "What Matters", "Signals To Verify", "Opportunity", "Recommended Search Plan"]
  },
  content: {
    name: "Content Agent",
    promise: "scripts, decks, one-pagers, and polished language",
    sections: ["Audience", "Core Message", "Draft Copy", "Stronger Version", "Call To Action"]
  },
  partnerships: {
    name: "Partnership Agent",
    promise: "partner targeting, outreach, and pilot framing",
    sections: ["Partner Fit", "Why They Care", "Outreach Angle", "Ask", "Follow-Up Plan"]
  },
  technical: {
    name: "Technical Agent",
    promise: "code, deployment, integration, and readiness support",
    sections: ["Current State", "Technical Risk", "Recommended Fix", "Validation", "Release Note"]
  },
  business: {
    name: "Business Builder Agent",
    promise: "business launch kits, websites, social media, and customer AI assistants",
    sections: ["Business Snapshot", "Ideal Customer", "Offer Menu", "Website Plan", "Social Media Plan", "AI Assistant Plan", "30-Day Launch Plan"]
  },
  grants: {
    name: "Grant Writing Agent",
    promise: "grant proposals, funder alignment, and application readiness",
    sections: ["Funder Fit", "Case For Support", "Outcomes & Measurement", "Budget Narrative", "Submission Checklist"]
  },
  donors: {
    name: "Donor Relations Agent",
    promise: "donor communications, stewardship, and fundraising campaigns",
    sections: ["Donor Segment", "Ask Strategy", "Stewardship Plan", "Campaign Copy", "Follow-Up Plan"]
  },
  volunteers: {
    name: "Volunteer Coordination Agent",
    promise: "volunteer recruitment, scheduling, and program support",
    sections: ["Program Need", "Role Design", "Recruitment Plan", "Onboarding & Scheduling", "Recognition Plan"]
  }
};

function createResponse({ agent = "coach", request = "", objective = "", audience = "", urgency = "normal", memory = "" }) {
  const profile = Object.hasOwn(agentProfiles, agent) ? agentProfiles[agent] : agentProfiles.coach;
  if (!Object.hasOwn(agentProfiles, agent)) agent = "coach";
  const cleanedRequest = String(request || "").trim();
  const cleanedObjective = String(objective || "").trim();
  const cleanedAudience = String(audience || "").trim();
  const now = new Date().toLocaleString();

  const contextLine = cleanedObjective
    ? `Objective: ${cleanedObjective}`
    : "Objective: clarify the request and produce the next useful business move.";
  const audienceLine = cleanedAudience
    ? `Audience: ${cleanedAudience}`
    : "Audience: coach, partners, investors, or internal execution depending on use.";

  const sectionText = profile.sections.map((section, index) => {
    const seed = [
      `Use ${profile.name} for ${profile.promise}.`,
      contextLine,
      audienceLine,
      `Urgency: ${urgency}.`,
      cleanedRequest ? `Request: ${cleanedRequest}` : "Request: no detailed request was entered yet."
    ];

    const recommendations = {
      0: "Frame the situation in one clear sentence before expanding the work.",
      1: "Identify the strongest path forward and the reason it matters now.",
      2: "Name the risks, missing details, or friction points that could slow execution.",
      3: "Turn the idea into concrete work that can be done, reviewed, or sent.",
      4: "Capture what AgriNexus should remember and what should happen next."
    };

    return `## ${section}\n\n${seed[index % seed.length]}\n\n${recommendations[index] || "Convert the request into a specific action with an owner and success state."}`;
  }).join("\n\n");

  return `# ${profile.name} Template Outline\n\nDraft structure only; no live research, investor assessment or external action occurred.\n\nCreated: ${now}\n\n${contextLine}\n\n${audienceLine}\n\nUrgency: ${urgency}\n\n## Request\n\n${cleanedRequest || "No request entered."}\n\n${sectionText}\n\n## Suggested Prompt To Use With A Live AI Model\n\n${profile.name}, help me with this request: ${cleanedRequest || "[enter request]"}. Use my AgriNexus memory, AgriNexus context, and business goals. Give me a practical answer with next steps.\n\n## Workspace Notes Used\n\n${memory.split("\n").slice(0, 18).join("\n")}`;
}


module.exports=Object.freeze({agentProfiles,createResponse});
