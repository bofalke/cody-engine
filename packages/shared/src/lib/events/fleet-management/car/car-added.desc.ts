import { AggregateEventDescription } from '@event-engine/descriptions/descriptions';

export const CarAddedDesc: AggregateEventDescription = {
  name: 'FleetManagement.Car.CarAdded',
  aggregateEvent: true,
  public: false,
  aggregateState: 'FleetManagement.Car.Car',
  aggregateName: 'FleetManagement.Car',
  aggregateIdentifier: 'vehicleId',
  _pbBoardId: 'aa829115-50ee-44fe-a633-67cd51817106',
  _pbCardId: 'ncEudogeZ727TUbtRbbT4W',
  _pbCreatedBy: '4135b8ff-53fc-442b-8130-b618abedaca7',
  _pbCreatedAt: '2024-04-10T15:01:55.783Z',
  _pbLastUpdatedBy: '4135b8ff-53fc-442b-8130-b618abedaca7',
  _pbLastUpdatedAt: '2024-04-10T15:01:55.783Z',
  _pbVersion: 1,
  _pbLink:
    'https://app.prooph-board.com/inspectio/board/aa829115-50ee-44fe-a633-67cd51817106?cells=ncEudogeZ727TUbtRbbT4W&clicks=1',
};
