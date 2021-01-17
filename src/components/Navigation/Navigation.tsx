import React, { PropsWithChildren } from 'react';
import LogoutButton from './LogoutButton';
import NavigationButtons from './NavigationButtons';

export default function Navigation({ children }: PropsWithChildren<unknown>) {
  return (
    <main className="flex w-full h-screen">
      <aside className="w-80 h-screen bg-gray shadow-md w-fulll hidden sm:block">
        <div className="flex flex-col justify-between h-screen p-4 bg-gray-800">
          <NavigationButtons />

          <LogoutButton />
        </div>
      </aside>

      <section className="w-full p-4">{children}</section>
    </main>
  );
}
