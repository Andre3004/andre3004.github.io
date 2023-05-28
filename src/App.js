import { Home } from './pages/Home';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';

const App = () => {
  const router = createHashRouter([
    { path: '/', element: <Home /> },
    { path: '/pdf', element: <Home /> },
  ]);

  return ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
