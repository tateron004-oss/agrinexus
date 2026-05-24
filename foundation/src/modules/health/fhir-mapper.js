function intakeToFhirBundle({ intake, country, carePlanText }) {
  const patientId = `Patient/${intake.patient_ref}`;
  const encounterId = `Encounter/${intake.id}`;
  const now = new Date().toISOString();

  const entries = [
    {
      resource: {
        resourceType: "Patient",
        id: intake.patient_ref,
        identifier: [
          {
            system: "https://agrinexus.local/patient-ref",
            value: intake.patient_ref
          }
        ]
      }
    },
    {
      resource: {
        resourceType: "Encounter",
        id: intake.id,
        status: "in-progress",
        class: {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          code: "VR",
          display: "virtual"
        },
        subject: { reference: patientId },
        period: { start: intake.created_at || now },
        location: country ? [{ location: { display: country.name } }] : []
      }
    },
    {
      resource: {
        resourceType: "Observation",
        id: `${intake.id}-risk`,
        status: "preliminary",
        code: {
          text: "AgriNexus intake risk level"
        },
        subject: { reference: patientId },
        encounter: { reference: encounterId },
        valueString: intake.risk_level
      }
    },
    {
      resource: {
        resourceType: "ServiceRequest",
        id: `${intake.id}-need`,
        status: "active",
        intent: "order",
        subject: { reference: patientId },
        encounter: { reference: encounterId },
        code: { text: intake.need_summary }
      }
    }
  ];

  if (carePlanText) {
    entries.push({
      resource: {
        resourceType: "CarePlan",
        id: `${intake.id}-care-plan`,
        status: "active",
        intent: "plan",
        subject: { reference: patientId },
        encounter: { reference: encounterId },
        description: carePlanText
      }
    });
  }

  return {
    resourceType: "Bundle",
    type: "collection",
    timestamp: now,
    entry: entries
  };
}

function intakeToProviderPayload({ intake, country, carePlanText, policy }) {
  return {
    patientRef: intake.patient_ref,
    intakeId: intake.id,
    country: country && {
      id: country.id,
      name: country.name,
      riskLevel: country.risk_level,
      heatIndexC: country.heat_index_c,
      queueStatus: country.queue_status
    },
    intake: {
      needSummary: intake.need_summary,
      riskLevel: intake.risk_level,
      queueStatus: intake.queue_status,
      representativeStatus: intake.representative_status
    },
    carePlanText,
    policyDisclaimer: policy && policy.disclaimer,
    fhir: intakeToFhirBundle({ intake, country, carePlanText })
  };
}

module.exports = {
  intakeToFhirBundle,
  intakeToProviderPayload
};
