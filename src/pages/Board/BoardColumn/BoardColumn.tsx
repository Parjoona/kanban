import React, { PropsWithChildren } from 'react';

interface BoardColumn extends PropsWithChildren<unknown> {
  name: string;
}

export default function BoardColumn({ name, children }: BoardColumn) {
  return (
    <div className="rounded bg-gray-200 w-64 p-2">
      <div className="flex justify-between py-1">
        <h3 className="text-sm ml-1">{name}</h3>
        <svg
          className="h-4 fill-current text-grey-dark cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
        </svg>
      </div>
      {children}
    </div>
  );
}
