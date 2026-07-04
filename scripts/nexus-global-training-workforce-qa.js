const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const doc = read("docs/NEXUS_GLOBAL_TRAINING_WORKFORCE_ENGINE.md");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(haystack, needle, message) {
  assert(
    haystack.includes(needle),
    message || `Expected to find ${needle}`
  );
}

function excludes(haystack, needle, message) {
  assert(
    !haystack.toLowerCase().includes(needle.toLowerCase()),
    message || `Did not expect to find ${needle}`
  );
}

const liveKnowledge = spawnSync(process.execPath, ["scripts/nexus-global-live-knowledge-qa.js"], {
  cwd: root,
  encoding: "utf8"
});
assert.strictEqual(
  liveKnowledge.status,
  0,
  `global live knowledge QA should pass before training/workforce QA\n${liveKnowledge.stdout}\n${liveKnowledge.stderr}`
);

[
  "nexusGlobalTrainingWorkforceIntent",
  "nexusGlobalTrainingWorkforcePacketType",
  "buildNexusGlobalTrainingWorkforcePacket",
  "nexusGlobalTrainingWorkforceEngine",
  "/api/nexus/global-training-workforce/engine",
  "nexusLiveKnowledgeAllModesQuery",
  "training_support_packet",
  "workforce_pathway_packet",
  "employer_partner_research_packet",
  "learning_recommendation_packet",
  "digital_literacy_packet",
  "agriculture_literacy_packet",
  "health_literacy_packet",
  "ai_literacy_packet",
  "credential_pathway_packet",
  "resume_interview_prep_packet",
  "digital literacy",
  "agriculture literacy",
  "health literacy",
  "AI literacy",
  "digital_literacy",
  "agriculture_literacy",
  "health_literacy",
  "ai_literacy",
  "credential_pathway",
  "resume_interview_prep",
  "workforce readiness",
  "continuing education",
  "credential",
  "resume",
  "interview",
  "employer partner",
  "sector needs",
  "noEmployerContactAuthorized",
  "noJobApplicationSubmitted",
  "noEnrollmentSubmitted",
  "noProfileSubmissionAuthorized",
  "requiresConfirmationForEmployerContact",
  "requiresConfirmationForJobApplication",
  "requiresConfirmationForEnrollment",
  "requiresConfirmationForProfileSharing",
  "requiresConfirmationForCredentialIssuance",
  "learnerCoachReviewQuestions",
  "queueReviewState",
  "auditState",
  "handoffReadiness",
  "noCredentialIssued",
  "global_training_workforce_packet_prepared"
].forEach(token => includes(server, token, `server should include ${token}`));

[
  "renderNexusGlobalTrainingWorkforcePacket",
  "NEXUS_TRAINING_WORKFORCE_SECTIONS",
  "renderNexusTrainingWorkforceSections",
  "/api/nexus/global-training-workforce/engine",
  "nexus-global-training-workforce-packet-card",
  "data-testid=\"nexus-training-workforce-sections\"",
  "data-testid=\"nexus-training-workforce-section-${escapeHtml(section.id)}\"",
  "id: \"digital-literacy\"",
  "id: \"agriculture-literacy\"",
  "id: \"health-literacy\"",
  "id: \"ai-literacy\"",
  "id: \"workforce-pathway\"",
  "id: \"resume-interview\"",
  "id: \"credential-pathway\"",
  "id: \"employer-research\"",
  "id: \"learning-recommendations\"",
  "nexus-training-workforce-packet-type",
  "nexus-training-workforce-focus-areas",
  "nexus-training-workforce-source-backed-research",
  "nexus-training-workforce-skill-pathway",
  "nexus-training-workforce-resume-interview-prep",
  "nexus-training-workforce-learning-recommendations",
  "nexus-training-workforce-employer-fit",
  "nexus-training-workforce-review-questions",
  "nexus-training-workforce-queue-review-audit-state",
  "nexus-training-workforce-handoff-gates",
  "nexus-training-workforce-live-knowledge-status",
  "nexus-training-workforce-citation-count",
  "nexus-training-workforce-export-ready",
  "nexus-training-workforce-no-execution",
  "Research training options",
  "Recommend learning path",
  "Research job roles",
  "Research employer fit",
  "training_support_packet",
  "workforce_pathway_packet",
  "employer_partner_research_packet",
  "learning_recommendation_packet"
  , "digital_literacy_packet"
  , "agriculture_literacy_packet"
  , "health_literacy_packet"
  , "ai_literacy_packet"
  , "credential_pathway_packet"
  , "resume_interview_prep_packet"
].forEach(token => includes(app, token, `app should include ${token}`));

[
  "Global Training, Literacy, and Workforce Engine",
  "Digital literacy",
  "Agriculture literacy",
  "Health literacy",
  "AI literacy",
  "Workforce readiness",
  "Employer partner research",
  "training_support_packet",
  "workforce_pathway_packet",
  "employer_partner_research_packet",
  "learning_recommendation_packet",
  "digital_literacy_packet",
  "agriculture_literacy_packet",
  "health_literacy_packet",
  "ai_literacy_packet",
  "credential_pathway_packet",
  "resume_interview_prep_packet",
  "Digital Literacy",
  "Agriculture Training",
  "Health Literacy",
  "AI Literacy",
  "Workforce Pathway",
  "Resume / Interview Prep",
  "Credential Pathway",
  "Employer Partner Research",
  "Learning Recommendations",
  "queue/review/audit state",
  "handoff readiness",
  "does not fabricate citations",
  "Apply for jobs",
  "Contact employers",
  "Enroll a learner",
  "explicit user approval",
  "confirmation",
  "audit controls"
].forEach(token => includes(doc, token, `doc should include ${token}`));

[
  "applied for a job automatically",
  "contacted the employer automatically",
  "submitted your resume automatically",
  "enrolled you automatically",
  "guaranteed employment",
  "guaranteed certification",
  "generated fake citation",
  "secret token",
  "api key value"
].forEach(phrase => {
  excludes(server, phrase, `server should not contain unsafe phrase: ${phrase}`);
  excludes(app, phrase, `app should not contain unsafe phrase: ${phrase}`);
  excludes(doc, phrase, `doc should not contain unsafe phrase: ${phrase}`);
});

assert.strictEqual(
  packageJson.scripts["qa:nexus-global-training-workforce"],
  "node scripts/nexus-global-training-workforce-qa.js",
  "package script should expose global training/workforce QA"
);
includes(qaSuite, "scripts/nexus-global-training-workforce-qa.js", "qa suite should include global training/workforce QA");

console.log("nexus-global-training-workforce QA passed");
