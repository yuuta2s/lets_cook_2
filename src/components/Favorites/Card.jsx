import React from 'react';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';


function Card({ recettes, searchValue, showFavoritesOnly }) {
  const [favorites, setFavorites] = useState([]);

  const filteredRecettes = recettes.filter((recette) =>
    recette.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleFavoriteClick = (id) => {
    const isFavorite = favorites.includes(id);

    if (isFavorite) {
      setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };
 
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRecettes.map((recette) => (
          (showFavoritesOnly && !favorites.includes(recette.id)) ? null : (
            <div key={recette.id} className="relative bg-white rounded-lg shadow-md overflow-hidden">
              <img className="w-full h-48 object-cover rounded-t-lg" src={recette.imageUrl} alt={recette.title} />
              <button className="absolute top-0 right-0 mt-2 mr-2 bg-transparent text-red-700 font-bold py-1 px-2 rounded" onClick={() => handleFavoriteClick(recette.id)}>
                {favorites.includes(recette.id) ? (
                  <SolidHeartIcon className="h-6 w-6 text-red-500" />
                ) : (
                  <OutlineHeartIcon className="h-6 w-6 text-white" />
                )}
              </button>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{recette.title}</h2>
                <p className="text-gray-700 mb-4">{recette.description}</p>
                <p className="text-gray-700 mb-4">Auteur: {recette.author}</p>
                <p className="text-gray-700 mb-4">Difficulté: {Array(recette.difficulty).fill('⭐').join(' ')}</p>
                <p> </p>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default Card;