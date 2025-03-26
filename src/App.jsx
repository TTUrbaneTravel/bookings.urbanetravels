import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Loader from './common/Loader';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import B2CLogin from './pages/b2clogin'; // Import B2CLogin
import routes from './routes/index';
import routes1 from './routes/index1';
import ECommerce from './pages/Dashboard/ECommerce';
import Home from './pages/Home';
import "./FlightFilteration.css";

// Lazy Load Layouts
const UserLayout = lazy(() => import('./layout/UserLayout'));
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Function to check if the user is authenticated
  const isAuthenticated = () => {
    // Implement your authentication logic here
    // For example, check if a token exists in localStorage
    return localStorage.getItem('token') !== null;
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />

      {/* Routes */}
      <Routes>
        {/* Authentication Routes */}
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/customer-login" element={<B2CLogin />} /> {/* New Route */}

        {/* Protected Routes (Require Authentication) */}
        <Route
          element={
            <Suspense fallback={<Loader />}>
              {isAuthenticated() ? <UserLayout /> : <SignIn />}
            </Suspense>
          }
        >
          <Route index element={<Home />} />
          {routes.map(({ path, component: Component }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <Suspense fallback={<Loader />}>
                  <Component />
                </Suspense>
              }
            />
          ))}
        </Route>

        {/* Default Layout Routes */}
        <Route
          element={
            <Suspense fallback={<Loader />}>
              <DefaultLayout />
            </Suspense>
          }
        >
          <Route path="/ecommerce" element={<ECommerce />} />
          {routes1.map(({ path, component: Component }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <Suspense fallback={<Loader />}>
                  <Component />
                </Suspense>
              }
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;