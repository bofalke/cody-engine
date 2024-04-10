export const AddCarToFleetSchema = {
  type: 'object',
  properties: {
    vehicleId: {
      type: 'string',
      format: 'uuid',
      title: 'Vehicle Id',
    },
    brand: {
      type: 'string',
      title: 'Brand',
    },
    model: {
      type: 'string',
      title: 'Model',
    },
    productionYear: {
      type: 'integer',
      minimum: 1900,
      title: 'Production Year',
    },
  },
  required: ['vehicleId', 'brand', 'model'],
  additionalProperties: false,
  $id: '/definitions/fleet-management/commands/add-car-to-fleet',
  title: 'Add Car To Fleet',
} as const;
