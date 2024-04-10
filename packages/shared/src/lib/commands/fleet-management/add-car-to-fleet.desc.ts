import { AggregateCommandDescription } from '@event-engine/descriptions/descriptions';

export const AddCarToFleetDesc: AggregateCommandDescription = {
  name: 'FleetManagement.AddCarToFleet',
  aggregateCommand: true,
  newAggregate: true,
  aggregateName: 'FleetManagement.Car',
  aggregateIdentifier: 'vehicleId',

  _pbBoardId: 'aa829115-50ee-44fe-a633-67cd51817106',
  _pbCardId: '769vcgTup1x237QkfaD92U',
  _pbCreatedBy: '4135b8ff-53fc-442b-8130-b618abedaca7',
  _pbCreatedAt: '2024-04-10T15:01:46.539Z',
  _pbLastUpdatedBy: '4135b8ff-53fc-442b-8130-b618abedaca7',
  _pbLastUpdatedAt: '2024-04-10T15:01:46.539Z',
  _pbVersion: 1,
  _pbLink:
    'https://app.prooph-board.com/inspectio/board/aa829115-50ee-44fe-a633-67cd51817106?cells=769vcgTup1x237QkfaD92U&clicks=1',
};
