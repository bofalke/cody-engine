import { CircularProgress } from '@mui/material';
import StateView from '@frontend/app/components/core/StateView';
import { usePageData } from '@frontend/hooks/use-page-data';
import { useEffect } from 'react';
import { useGetCar } from '@frontend/queries/fleet-management/use-get-car';
import { FleetManagementCarCarVORuntimeInfo } from '@app/shared/types/fleet-management/car/car';
import { determineQueryPayload } from '@app/shared/utils/determine-query-payload';
import { FleetManagementGetCarQueryRuntimeInfo } from '@app/shared/queries/fleet-management/get-car';

type CarProps = Record<string, string> & { vehicleId: string };

const Car = (props: CarProps) => {
  const [, addQueryResult] = usePageData();
  const query = useGetCar(
    determineQueryPayload(props, FleetManagementGetCarQueryRuntimeInfo)
  );

  useEffect(() => {
    addQueryResult('/Car/Car', query);
  }, [query.dataUpdatedAt]);

  return (
    <>
      {query.isLoading && <CircularProgress />}
      {query.isSuccess && (
        <StateView
          description={FleetManagementCarCarVORuntimeInfo}
          state={query.data}
        />
      )}
    </>
  );
};

export default Car;
