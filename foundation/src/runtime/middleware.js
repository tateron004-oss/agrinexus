const { parseCookies } = require("./cookies");
const { createRequestContext } = require("./request-context");
const { permissionsForRoles } = require("./permissions");
const { verifySessionToken } = require("../modules/auth/sessions");

function withRequestContext({ config, roleResolver }) {
  return async function attachContext(request) {
    const cookies = parseCookies(request.headers?.cookie || "");
    const session = verifySessionToken(cookies.agrinexus_session, config.auth.sessionSecret);
    let roles = [];

    if (session && roleResolver) {
      roles = await roleResolver(session.sub);
    }

    return {
      ...request,
      context: createRequestContext({
        tenantId: session?.tid,
        userId: session?.sub,
        roles,
        permissions: permissionsForRoles(roles),
        requestId: request.headers?.["x-request-id"],
        ipAddress: request.ipAddress
      })
    };
  };
}

module.exports = { withRequestContext };
