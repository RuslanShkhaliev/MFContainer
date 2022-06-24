/*
 Created by Ruslan on 23.06.2022 (morehome@mail.ru)
 */
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const AppHeader: FC = () => {
  return (
    <header>
      <div className="center-column">
        <h1>🍽 Feed me</h1>
      </div>
      <nav>
        <ol className="center-column">
          <li>
            <NavLink to="/restaurants">Browse restaurants</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default AppHeader;
