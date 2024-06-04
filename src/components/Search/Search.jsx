import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/solid';

function Search({ onSearch, showFavorites, onReset }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  const handleShowFavoritesClick = () => {
    showFavorites();
  };

  const handleResetClick = () => {
    setSearchTerm('');
    onReset();
  };

  return (
    <div className="mt-8 mb-2">
      <div className="flex items-center gap-4">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
          </span>
          <input
            className="placeholder-italic placeholder-text-slate-400 bg-white w-full border-2 border-red-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-theme1-900 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
            value={searchTerm}
            onChange={handleChange}
            style={{ minWidth: '1350px' }} // Utilisez minWidth pour garantir une largeur minimale
          />
        </label>

        <button className="bg-transparent hover:bg-theme1-900 text-theme1-800 font-semibold hover:text-white py-2 px-4 border border-theme1-900 hover:border-transparent rounded" onClick={handleShowFavoritesClick}>
          <HeartIcon className="h-6 w-6 text-gray-500" />
        </button>

        <button className="min-w-16 text-center px-4 py-2 text-white font-semibold rounded-md transition-colors duration-300 bg-theme1-800 hover:bg-theme1-900" onClick={handleResetClick}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Search;