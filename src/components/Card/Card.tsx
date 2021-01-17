import React, { useState } from 'react';

interface ICard {
  title: string;
  tasks: string | null;
}

export default function Card({ title, tasks }: ICard) {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => setOpen(!open);

  return (
    <>
      <button
        className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter w-full"
        type="button"
        onClick={handleClick}
      >
        <div>
          <p className="px-1 text-left">{title}</p>
          <div className="text-grey-darker mt-2 ml-1 flex justify-between items-start">
            <span className="text-xs my-1 flex items-center">
              <svg
                className="h-4 fill-current mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
              >
                <path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z" />
              </svg>
              {tasks}
            </span>
          </div>
        </div>
      </button>

      {open && (
        <div
          tabIndex={0}
          role="button"
          onKeyDown={({ key }) => {
            console.log(key);
            if (key === 'Escape') handleClick();
          }}
          className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex"
          // onClick={handleClick}
        >
          <div className="relative pt-8 pl-8 pr-4 pb-4 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
            <h2 className="text-xl">Hello</h2>
            <div className="py-5">Description</div>
            <div className="flex justify-end">
              <div className="p-1">
                <button
                  type="button"
                  onClick={handleClick}
                  className="focus:outline-none focus:border-none hover:bg-opacity-50 px-8 py-2 rounded-md inline-flex items-center bg-red-900 text-white hover:text-black"
                >
                  No
                </button>
              </div>
              <div className="p-1">
                <button
                  type="button"
                  onClick={handleClick}
                  className="focus:outline-none focus:border-none hover:bg-opacity-50 px-8 py-2 rounded-md inline-flex items-center bg-green-700 hover:bg-green-900 text-white hover:text-black"
                >
                  Yes
                </button>
              </div>
            </div>
            <span className="absolute top-0 right-0 p-4">
              <button
                type="button"
                onClick={handleClick}
                className="focus:outline-none focus:border-none hover:bg-gray-400 hover:bg-opacity-25 px-4 py-2 rounded-md inline-flex items-center"
              >
                X
              </button>
            </span>
          </div>
        </div>
      )}
    </>
  );
}
