import React from 'react';
import clsx from 'clsx';
import { NavLink, useLocation } from 'react-router-dom';

export default function NavigationButtons() {
  const links = [
    { link: '/', name: 'Home' },
    { link: '/backlog', name: 'Backlog' },
    { link: '/board', name: 'Board' },
  ];

  const { pathname } = useLocation();
  const isActive = (link: string) => pathname !== link;

  return (
    <div className="text-sm">
      {links.map(({ link, name }) => (
        <NavLink to={link} activeClassName="bg-gray-700 text-blue-300">
          <div
            className={clsx(
              'p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300',
              {
                'bg-gray-900 text-white': isActive(link),
                'bg-gray-700 text-blue-300': !isActive(link),
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
