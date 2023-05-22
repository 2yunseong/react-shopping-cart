import React from 'react';
import ReactDOM from 'react-dom/client';
import { worker } from './mocks/browser';
import Router from './Router';

const main = async () => {
  if (process.env.NODE_ENV === 'development') {
    worker.start();
    return;
  }

  if (window.location.pathname === '/react-shopping-cart') {
    window.location.pathname = '/react-shopping-cart/';
    return;
  }

  await worker.start({
    serviceWorker: {
      url: '/react-shopping-cart/mockServiceWorker.js',
    },
  });
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

main();
