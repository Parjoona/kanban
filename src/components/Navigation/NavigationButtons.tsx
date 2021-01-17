import React from 'react';

export default function NavigationButtons() {
  return (
    <div className="text-sm">
      <div className="bg-gray-900 text-white p-5 rounded cursor-pointer">
        Home
      </div>
      <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
        Backlog
      </div>
      <div className="bg-gray-700 text-blue-300 p-2 rounded mt-2 cursor-pointer">
        Board
      </div>
    </div>
  );
}
