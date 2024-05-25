import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ROUTE_PATHS } from './constants/routePaths';
import Loader from './components/Loader';
import Header from './components/header/Header';
import Home from './pages/home/Home';

const Orders = lazy(() => import('./pages/orders/Orders'));

function App() {
  const router = createBrowserRouter([
    {
      path: ROUTE_PATHS.HOME,
      element: <Header />,
      children: [
        {
          path: ROUTE_PATHS.HOME,
          element: <Home />
        },
        {
          path: ROUTE_PATHS.ORDERS,
          element: (
            <Suspense fallback={<Loader />}>
              <Orders />
            </Suspense>
          )
        }]
    }])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
