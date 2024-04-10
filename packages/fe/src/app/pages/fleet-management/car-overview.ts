import { TopLevelPageWithProophBoardDescription } from '@frontend/app/pages/page-definitions';
import { staticLabel } from '@frontend/util/breadcrumb/static-label';
import { CarMultiple } from 'mdi-material-ui';

export const CarOverview: TopLevelPageWithProophBoardDescription = {
  commands: ['FleetManagement.AddCarToFleet'],
  components: ['FleetManagement.CarList'],
  topLevel: true,
  route: '/cars',
  sidebar: {
    label: 'Cars',
    Icon: CarMultiple,
    position: 5,
  },
  breadcrumb: staticLabel('Car Overview'),

  _pbBoardId: 'aa829115-50ee-44fe-a633-67cd51817106',
  _pbCardId: 'aevAyzYQkuebtV8BbiiAfS',
  _pbCreatedBy: '4135b8ff-53fc-442b-8130-b618abedaca7',
  _pbCreatedAt: '2024-04-10T15:01:42.670Z',
  _pbLastUpdatedBy: '4135b8ff-53fc-442b-8130-b618abedaca7',
  _pbLastUpdatedAt: '2024-04-10T15:04:20.046Z',
  _pbVersion: 3,
  _pbLink:
    'https://app.prooph-board.com/inspectio/board/aa829115-50ee-44fe-a633-67cd51817106?cells=aevAyzYQkuebtV8BbiiAfS&clicks=1',
};
