import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import App from './App';
import { routerHistory } from './history';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <HistoryRouter history={routerHistory}>
    <App />
  </HistoryRouter>,
);
