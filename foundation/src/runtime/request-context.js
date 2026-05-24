function createRequestContext({ tenantId, userId, roles = [], permissions = [], requestId, ipAddress } = {}) {
  return {
    tenantId,
    userId,
    roles,
    permissions,
    requestId: requestId || cryptoSafeId(),
    ipAddress: ipAddress || null,
    hasRole(role) {
      return roles.includes(role);
    },
    can(permission) {
      return permissions.includes(permission);
    }
  };
}

function cryptoSafeId() {
  return `req_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

module.exports = { createRequestContext };
