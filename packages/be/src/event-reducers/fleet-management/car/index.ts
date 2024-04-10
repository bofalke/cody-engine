import { ApplyFunctionRegistry } from '@event-engine/infrastructure/AggregateRepository';
import { Car } from '@app/shared/types/fleet-management/car/car';
import { applyCarAdded } from '@server/event-reducers/fleet-management/car/apply-car-added';
import { applyIncompleteCarAdded } from '@server/event-reducers/fleet-management/car/apply-incomplete-car-added';
import { applyCarAddedToFleet } from '@server/event-reducers/fleet-management/car/apply-car-added-to-fleet';
import { applyCarUpdated } from '@server/event-reducers/fleet-management/car/apply-car-updated';

const reducers: ApplyFunctionRegistry<Car> = {
  'FleetManagement.Car.CarAdded': applyCarAdded,
  'FleetManagement.Car.IncompleteCarAdded': applyIncompleteCarAdded,
  'FleetManagement.Car.CarAddedToFleet': applyCarAddedToFleet,
  'FleetManagement.Car.CarUpdated': applyCarUpdated,
};

export default reducers;
