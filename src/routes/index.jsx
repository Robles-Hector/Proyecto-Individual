import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../views/Dashboard';
import DriversList from '../views/Drivers/DriversList';
import DriverDetail from '../views/Drivers/DriverDetail';
import TeamsList from '../views/Teams/TeamsList';
import CircuitsList from '../views/Circuits/CircuitsList';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'drivers', element: <DriversList /> },
      { path: 'drivers/:driverId', element: <DriverDetail /> },
      { path: 'teams', element: <TeamsList /> },
      { path: 'circuits', element: <CircuitsList /> },
      { path: '*', element: <Navigate to="/" replace /> }
    ]
  }
]);