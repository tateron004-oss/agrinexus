# Maps Completion Status

The maps phase is complete at the foundation level and production-ready for a map tile/geocoding provider.

## Completed

- Maps repository.
- Maps service workflows.
- Maps routes.
- Permission enforcement.
- Facility point layer.
- Route line layer.
- Risk point layer.
- Combined GeoJSON export.
- OpenStreetMap default provider metadata.
- Mapbox-ready provider configuration.
- Route smoke coverage.

## Production Routes

- `GET /maps/layers/facilities`
- `GET /maps/layers/routes`
- `GET /maps/layers/risk`
- `GET /maps/geojson`

## Provider Environment Variables

```text
MAP_TILE_PROVIDER=openstreetmap|mapbox
MAPBOX_TOKEN=
```

## Files

```text
foundation/src/modules/maps/repository.js
foundation/src/modules/maps/service.js
foundation/src/modules/maps/routes.js
foundation/scripts/maps-routes-smoke.js
```

## Remaining Real-World Blockers

These require user/provider setup:

- Real map tile account if using Mapbox or another commercial provider.
- Geocoding/GPS provider selection for live device or logistics feeds.
- Production map styling and tile usage limits.
- Final field validation of facility and checkpoint coordinates.

The code path is now ready for those provider credentials and live coordinate feeds.
