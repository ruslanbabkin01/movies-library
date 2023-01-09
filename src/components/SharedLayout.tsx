import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Loader } from './Loader';

export const SharedLayout = () => {
  const activeStyle = {
    background: 'red',
  };

  return (
    <div className="mx-auto">
      <header className="flex mb-3 py-2">
        <nav className="flex mx-auto gap-4">
          <NavLink
            className="py-2 px-5 rounded bg-blue-400 text-white my-0 no-underline font-medium "
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="py-2 px-5 rounded  bg-blue-400 text-white my-0 no-underline font-medium"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/movies"
          >
            Movies
          </NavLink>
          <NavLink
            className="py-2 px-5 rounded  bg-blue-400 text-white my-0 no-underline font-medium"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/library"
          >
            Library
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
