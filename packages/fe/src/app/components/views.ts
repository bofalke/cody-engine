import React from 'react';
import CoreWelcome from '@frontend/app/components/core/welcome';
import FleetManagementCar from '@frontend/app/components/fleet-management/views/Car';
import FleetManagementCarList from '@frontend/app/components/fleet-management/views/CarList';

export type ViewRegistry = {
  [valueObjectName: string]: React.FunctionComponent<any>;
};

export const views: ViewRegistry = {
  'Core.Welcome': CoreWelcome,
  'FleetManagement.Car': FleetManagementCar,
  'FleetManagement.CarList': FleetManagementCarList,
};
