import { EventRuntimeInfo } from '@event-engine/messaging/event';
import { FleetManagementCarCarAddedRuntimeInfo } from '@app/shared/events/fleet-management/car/car-added';
import { FleetManagementCarIncompleteCarAddedRuntimeInfo } from '@app/shared/events/fleet-management/car/incomplete-car-added';
import { FleetManagementCarCarAddedToFleetRuntimeInfo } from '@app/shared/events/fleet-management/car/car-added-to-fleet';
import { FleetManagementCarCarUpdatedRuntimeInfo } from '@app/shared/events/fleet-management/car/car-updated';

type EventRegistry = { [eventName: string]: EventRuntimeInfo };

export const events: EventRegistry = {
  'FleetManagement.Car.CarAdded': FleetManagementCarCarAddedRuntimeInfo,
  'FleetManagement.Car.IncompleteCarAdded':
    FleetManagementCarIncompleteCarAddedRuntimeInfo,
  'FleetManagement.Car.CarAddedToFleet':
    FleetManagementCarCarAddedToFleetRuntimeInfo,
  'FleetManagement.Car.CarUpdated': FleetManagementCarCarUpdatedRuntimeInfo,
};
