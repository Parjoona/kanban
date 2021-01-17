import React, { ReactNode } from 'react';
import LogoutButton from './LogoutButton';
import NavigationButtons from './NavigationButtons';

interface INavigation {
  children: ReactNode;
}

export default function Navigation({ children }: INavigation) {
  return (
    <main className="flex w-full h-screen">
      <aside className="w-80 h-screen bg-gray shadow-md w-fulll hidden sm:block">
        <div className="flex flex-col justify-between h-screen p-4 bg-gray-800">
          <NavigationButtons />

          <div className="flex p-3 text-white bg-red-500 rounded cursor-pointer text-center text-sm">
            <LogoutButton />
          </div>
        </div>
      </aside>

      <section className="w-full p-4">{children}</section>
    </main>
  );
}
