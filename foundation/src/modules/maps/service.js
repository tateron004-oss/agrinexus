class MapsService {
  constructor({ repository, config }) {
    this.repository = repository;
    this.config = config;
  }

  async facilityLayer(tenantId, filters = {}) {
    const facilities = await this.repository.listFacilities(tenantId, filters);
    return {
      provider: this.tileProvider(),
      layer: "facilities",
      geojson: featureCollection(facilities.map(facilityFeature).filter(Boolean))
    };
  }

  async routeLayer(tenantId, filters = {}) {
    const routes = await this.repository.listRoutes(tenantId, filters);
    const checkpoints = await this.repository.listCheckpoints(routes.map(route => route.id));
    return {
      provider: this.tileProvider(),
      layer: "routes",
      geojson: featureCollection(routes.map(route => routeFeature(route, checkpoints)).filter(Boolean))
    };
  }

  async riskLayer(tenantId) {
    const countries = await this.repository.listCountries(tenantId);
    return {
      provider: this.tileProvider(),
      layer: "risk",
      geojson: featureCollection(countries.map(countryRiskFeature).filter(Boolean))
    };
  }

  async geojson(tenantId, filters = {}) {
    const [facilities, routes, countries] = await Promise.all([
      this.facilityLayer(tenantId, filters),
      this.routeLayer(tenantId, filters),
      this.riskLayer(tenantId)
    ]);
    return {
      provider: this.tileProvider(),
      type: "FeatureCollection",
      features: [
        ...facilities.geojson.features,
        ...routes.geojson.features,
        ...countries.geojson.features
      ]
    };
  }

  tileProvider() {
    const maps = this.config.maps || {};
    return {
      name: maps.tileProvider || "openstreetmap",
      configured: Boolean(maps.tileProvider === "openstreetmap" || maps.mapboxToken)
    };
  }
}

function featureCollection(features) {
  return { type: "FeatureCollection", features };
}

function facilityFeature(facility) {
  if (!hasPoint(facility)) return null;
  return {
    type: "Feature",
    geometry: point(facility),
    properties: {
      id: facility.id,
      layer: "facility",
      countryId: facility.country_id,
      name: facility.name,
      facilityType: facility.facility_type,
      status: facility.status,
      metadata: facility.metadata || {}
    }
  };
}

function routeFeature(route, allCheckpoints) {
  const checkpoints = allCheckpoints.filter(checkpoint => checkpoint.route_id === route.id && hasPoint(checkpoint));
  if (!checkpoints.length) return null;
  return {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: checkpoints.map(checkpoint => coordinates(checkpoint))
    },
    properties: {
      id: route.id,
      layer: "route",
      countryId: route.country_id,
      countryName: route.country_name,
      name: route.name,
      corridorType: route.corridor_type,
      color: route.color,
      status: route.status,
      checkpoints: checkpoints.map(checkpoint => ({
        id: checkpoint.id,
        sequence: checkpoint.sequence,
        name: checkpoint.name,
        checkpointType: checkpoint.checkpoint_type,
        coordinates: coordinates(checkpoint)
      }))
    }
  };
}

function countryRiskFeature(country) {
  if (!hasPoint(country)) return null;
  return {
    type: "Feature",
    geometry: point(country),
    properties: {
      id: country.id,
      layer: "risk",
      name: country.name,
      isoCode: country.iso_code,
      riskLevel: country.risk_level,
      heatIndexC: country.heat_index_c,
      queueStatus: country.queue_status,
      patients: country.patients,
      facilities: country.facilities,
      dataQualityRate: country.data_quality_rate
    }
  };
}

function hasPoint(row) {
  return row && row.latitude !== null && row.latitude !== undefined && row.longitude !== null && row.longitude !== undefined;
}

function coordinates(row) {
  return [Number(row.longitude), Number(row.latitude)];
}

function point(row) {
  return { type: "Point", coordinates: coordinates(row) };
}

module.exports = { MapsService };
