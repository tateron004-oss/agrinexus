function createModule({ name, owner, responsibilities, routes, tables, integrations }) {
  return {
    name,
    owner,
    responsibilities,
    routes,
    tables,
    integrations,
    describe() {
      return {
        name,
        owner,
        responsibilities,
        routes,
        tables,
        integrations
      };
    }
  };
}

module.exports = { createModule };
