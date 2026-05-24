const defaultShiftPolicy = {
  timezone: "Africa/Lagos",
  shiftWindows: [
    { label: "Morning field shift", start: "07:30", durationHours: 6 },
    { label: "Market coordination shift", start: "10:00", durationHours: 5 },
    { label: "Telehealth support shift", start: "12:30", durationHours: 4 }
  ],
  routeCapacity: {
    "West Africa Corridor": 12,
    "East Africa Corridor": 10,
    "North Africa Corridor": 8,
    "Central Africa Corridor": 6
  },
  minReadinessForFieldShift: 45
};

function chooseShift({ readinessScore = 0, routeName, preferredStart, policy = defaultShiftPolicy }) {
  if (readinessScore < policy.minReadinessForFieldShift) {
    throw new Error(`Field shifts require ${policy.minReadinessForFieldShift}% readiness.`);
  }
  const window = preferredStart
    ? { label: "Preferred field shift", start: preferredStart, durationHours: 4 }
    : policy.shiftWindows[0];
  return {
    title: `${window.label} - ${window.start}`,
    startsAt: window.start,
    durationHours: window.durationHours,
    timezone: policy.timezone,
    routeName,
    routeCapacity: policy.routeCapacity[routeName] || 4
  };
}

module.exports = {
  defaultShiftPolicy,
  chooseShift
};
