import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { F1Provider } from './context/F1Context'; // Lo crearemos en el siguiente paso
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <F1Provider>
      <RouterProvider router={router} />
    </F1Provider>
  </React.StrictMode>
);