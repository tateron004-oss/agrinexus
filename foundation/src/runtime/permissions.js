const rolePermissions = {
  admin: ["*"],
  coordinator: [
    "core:read",
    "learning:write",
    "workforce:read",
    "workforce:write",
    "health:write",
    "trade:write",
    "ai:run",
    "maps:read",
    "system:read"
  ],
  field_agent: [
    "core:read",
    "learning:write",
    "workforce:read",
    "trade:write",
    "maps:read",
    "system:read"
  ],
  health_operator: [
    "core:read",
    "health:write",
    "ai:run",
    "maps:read",
    "system:read"
  ]
};

function permissionsForRoles(roles = []) {
  const permissions = new Set();
  for (const role of roles) {
    for (const permission of rolePermissions[role] || []) permissions.add(permission);
  }
  return Array.from(permissions);
}

function can(context, permission) {
  if (!context) return false;
  return context.permissions.includes("*") || context.permissions.includes(permission);
}

function requirePermission(permission, handler) {
  return async request => {
    if (!can(request.context, permission)) {
      return {
        status: 403,
        headers: { "content-type": "application/json; charset=utf-8" },
        body: { error: `Missing permission: ${permission}` }
      };
    }
    return handler(request);
  };
}

module.exports = {
  rolePermissions,
  permissionsForRoles,
  can,
  requirePermission
};
