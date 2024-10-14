import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold tracking-tight hover:text-gray-200 transition-colors">
            🎬 Movie Reviews
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-200 transition-colors">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;