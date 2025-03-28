import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Loader from './common/Loader';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import routes from './routes/index';
import routes1 from './routes/index1';
import ECommerce from './pages/Dashboard/ECommerce';
import Home from './pages/Home';
import './FlightFilteration.css';
import b2clogin from './pages/b2clogin';
//import SearchForm from './components/SearchForm';

// Lazy Load Layouts
const UserLayout = lazy(() => import('./layout/UserLayout'));
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

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


        {/* Protected Routes (Require Authentication) */}
        <Route
          element={
            <Suspense fallback={<Loader />}>
              <UserLayout />
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

        <Route element={<DefaultLayout />}>
          <Route element={<ECommerce />} />
          {routes1.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>

      {/* <div className="p-6">
        <h1 className="text-2xl font-bold">User List</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="border p-2 my-2 rounded bg-gray-100">
              {user.name}
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
}

export default App;