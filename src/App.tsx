/*
 Created by Ruslan on 23.06.2022 (morehome@mail.ru)
 */
import React, { FC, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MicroFrontend from './components/MicroFrontend';
import { request } from './http';
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard';

type MicroFrontendModule = {
  path: string;
  host: string;
  scope: string;
};

const App: FC = () => {
  const [routes, setRoutes] = useState<MicroFrontendModule[]>([]);

  useEffect(() => {
    request('/modules-manifest.json')
      .then((manifest) => {
        console.log(manifest);
        setRoutes(manifest.modules);
      })
      .catch((err) => {
        console.log('error loading manifest', err);
      });
  }, []);

  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route index element={<Dashboard />} />
        {routes.map((route) => (
          <Route
            key={route.scope}
            path={route.path + '/*'}
            element={<MicroFrontend host={route.host} scope={route.scope} />}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
