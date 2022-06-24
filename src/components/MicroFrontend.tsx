/*
 Created by Ruslan on 23.06.2022 (morehome@mail.ru)
 */
import React, { FC, memo, useEffect } from 'react';
import { routerHistory } from '../history';
import { MicroFrontendService } from '../services/ModuleService';

const ErrorComponent: FC = () => {
  return <div>Error loading</div>;
};

interface MicroFrontendProps {
  scope: string;
  host: string;
}

const MicroFrontend: FC<MicroFrontendProps> = ({ scope, host }) => {
  const module = MicroFrontendService.setup(scope, host, routerHistory);

  useEffect(() => {
    module.render().catch((err) => {
      console.log('CATCH ERROR', err);
    });

    return module.unmount;
  }, [host]);

  return <main id={module.containerId} />;
};
export default memo(MicroFrontend);
