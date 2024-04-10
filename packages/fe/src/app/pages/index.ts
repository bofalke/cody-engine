import { PageDefinition } from '@frontend/app/pages/page-definitions';
import { Dashboard } from '@frontend/app/pages/core/dashboard';
import { CarDetails as FleetManagementCarDetails } from '@frontend/app/pages/fleet-management/car-details';
import { CarOverview as FleetManagementCarOverview } from '@frontend/app/pages/fleet-management/car-overview';

export type PageRegistry = { [pageName: string]: PageDefinition };

export const pages: PageRegistry = {
  Dashboard: Dashboard,
  'FleetManagement.CarDetails': FleetManagementCarDetails,
  'FleetManagement.CarOverview': FleetManagementCarOverview,
};
