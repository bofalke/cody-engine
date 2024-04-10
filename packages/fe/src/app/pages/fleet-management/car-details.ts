import { SubLevelPageWithProophBoardDescription } from '@frontend/app/pages/page-definitions';
import { dynamicLabel } from '@frontend/util/breadcrumb/dynamic-label';
import { GetCarDesc } from '@app/shared/queries/fleet-management/get-car.desc';
import { getCar } from '@frontend/queries/fleet-management/use-get-car';
import jexl from '@app/shared/jexl/get-configured-jexl';

export const CarDetails: SubLevelPageWithProophBoardDescription = {
  commands: ['FleetManagement.UpdateCar'],
  components: ['FleetManagement.Car'],
  topLevel: false,
  route: '/cars/:vehicleId',
  routeParams: ['vehicleId'],
  breadcrumb: dynamicLabel(
    GetCarDesc.name,
    getCar,
    (data) => {
      const ctx: any = { data, value: '' };

      ctx['value'] = jexl.evalSync("data.brand + ' ' + data.model", ctx);

      return ctx.value;
    },
    'Car Details'
  ),

  _pbBoardId: 'aa829115-50ee-44fe-a633-67cd51817106',
  _pbCardId: 'rMtAYVejJQZuuF7Q8SDkrF',
  _pbCreatedBy: '4135b8ff-53fc-442b-8130-b618abedaca7',
  _pbCreatedAt: '2024-04-10T15:01:36.956Z',
  _pbLastUpdatedBy: '4135b8ff-53fc-442b-8130-b618abedaca7',
  _pbLastUpdatedAt: '2024-04-10T15:01:36.956Z',
  _pbVersion: 1,
  _pbLink:
    'https://app.prooph-board.com/inspectio/board/aa829115-50ee-44fe-a633-67cd51817106?cells=rMtAYVejJQZuuF7Q8SDkrF&clicks=1',
};
