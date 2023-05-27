import { Home } from './pages/Home';
import { useRoutes } from 'react-router-dom';

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/pdf', element: <Home /> },
  ]);

  return routes;
};

export default App;
