"use strict";

class AuthorityCoverage {
  constructor({ applications, tools, adapters, verifiers } = {}) {
    if (!applications?.list || !tools?.list || !adapters?.has || !verifiers?.has) {
      throw new Error("Applications, tools, adapters, and verifiers are required.");
    }
    Object.assign(this, { applications, tools, adapters, verifiers });
  }

  async report() {
    const registeredTools = await this.tools.list();
    const available = new Set(registeredTools.filter(tool => tool.availability === "available").map(tool => tool.tool_id));
    const applications = this.applications.list().map(application => {
      const capabilities = application.capabilities.map(toolId => {
        const toolAvailable = available.has(toolId);
        const adapterOwned = this.adapters.has(toolId);
        const verifierOwned = this.verifiers.has(toolId);
        return Object.freeze({ toolId, toolAvailable, adapterOwned, verifierOwned,
          authoritative: toolAvailable && adapterOwned && verifierOwned });
      });
      const gaps = capabilities.filter(item => !item.authoritative);
      return Object.freeze({ applicationId: application.applicationId, capabilities: Object.freeze(capabilities),
        authoritative: gaps.length === 0, gaps: Object.freeze(gaps) });
    });
    const authoritativeApplications = applications.filter(item => item.authoritative).length;
    return Object.freeze({ schema: "nexus.authority-coverage.v1", generatedAt: new Date().toISOString(),
      applicationCount: applications.length, authoritativeApplications,
      complete: authoritativeApplications === applications.length,
      applications: Object.freeze(applications) });
  }

  async requireApplication(applicationId) {
    const report = await this.report();
    const application = report.applications.find(item => item.applicationId === applicationId);
    if (!application) throw coded("application_not_registered", `Application ${applicationId} is not registered.`, 404);
    if (!application.authoritative) {
      const error = coded("application_authority_incomplete", `Application ${applicationId} does not have complete authoritative execution ownership.`);
      error.details = { applicationId, gaps: application.gaps };
      throw error;
    }
    return application;
  }
}

function coded(code, message, status = 503) { const error = new Error(message); error.code = code; error.status = status; return error; }
module.exports = Object.freeze({ AuthorityCoverage });
