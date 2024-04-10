import { AggregateEventDescription } from '@event-engine/descriptions/descriptions';

export const CarUpdatedDesc: AggregateEventDescription = {
  name: 'FleetManagement.Car.CarUpdated',
  aggregateEvent: true,
  public: false,
  aggregateState: 'FleetManagement.Car.Car',
  aggregateName: 'FleetManagement.Car',
  aggregateIdentifier: 'vehicleId',
  _pbBoardId: 'aa829115-50ee-44fe-a633-67cd51817106',
  _pbCardId: 'uZgBVGhFKgjPHhd7qNbGUE',
  _pbCreatedBy: '4135b8ff-53fc-442b-8130-b618abedaca7',
  _pbCreatedAt: '2024-04-10T15:02:08.531Z',
  _pbLastUpdatedBy: '4135b8ff-53fc-442b-8130-b618abedaca7',
  _pbLastUpdatedAt: '2024-04-10T15:02:08.531Z',
  _pbVersion: 1,
  _pbLink:
    'https://app.prooph-board.com/inspectio/board/aa829115-50ee-44fe-a633-67cd51817106?cells=uZgBVGhFKgjPHhd7qNbGUE&clicks=1',
};
