/*
 Created by Ruslan on 23.06.2022 (morehome@mail.ru)
 */
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '../components/AppHeader';

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <div>
      <AppHeader />
      <Outlet />
    </div>
  );
};

export default Layout;
