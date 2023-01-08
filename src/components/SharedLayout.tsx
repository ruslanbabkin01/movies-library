import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Loader } from './Loader';

export const SharedLayout = () => {
  const activeStyle = {
    background: 'red',
  };

  return (
    <div className="mx-auto py-1 px-4">
      <header className="flex py-2 px-0 border-b-1 border-black">
        <nav className="flex mx-auto">
          <NavLink
            className="py-2 px-7 rounded bg-blue-400 text-white my-0 mx-10 no-underline font-medium "
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="py-2 px-7 rounded  bg-blue-400 text-white my-0 mx-10 no-underline font-medium"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/movies"
          >
            Movies
          </NavLink>
          <NavLink
            className="py-2 px-7 rounded  bg-blue-400 text-white my-0 mx-10 no-underline font-medium"
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
