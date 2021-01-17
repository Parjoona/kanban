import React from 'react';
import clsx from 'clsx';
import { NavLink, useLocation } from 'react-router-dom';

export default function NavigationButtons() {
  const pages = [
    { link: '/', name: 'Home' },
    { link: '/backlog', name: 'Backlog' },
    { link: '/board', name: 'Board' },
  ];

  const { pathname } = useLocation();

  return (
    <div className="text-sm">
      {pages.map(({ link, name }) => (
        <NavLink to={link} activeClassName="bg-gray-700 text-blue-300">
          <div
            className={clsx(
              'p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300',
              {
                'bg-gray-900 text-white': pathname !== link,
                'bg-gray-700 text-blue-300': pathname === link,
              },
            )}
          >
            {name}
          </div>
        </NavLink>
      ))}
    </div>
  );
}
