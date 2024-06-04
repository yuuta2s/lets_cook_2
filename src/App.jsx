import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Search from "./components/Search/Search";
import Card from './components/Favorites/Card';
import recettes from './assets/data/db.json';
import Footer from './components/Footer/Footer';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const handleShowFavorites = () => {
    setShowFavoritesOnly(!showFavoritesOnly);
  };

  const handleReset = () => {
    setSearchValue('');
    setShowFavoritesOnly(false);
  };

  return (
    <>
      <Navbar />
      <div className='container mx-auto px-1 py-8'>
      <h1 className='my-4 text-6xl text-theme1-900'>Let's Cook</h1>
      <Search onSearch={handleSearch} showFavorites={handleShowFavorites} onReset={handleReset} />
      <h1 className="text-3xl font-bold underline mb-4">Toutes les recettes</h1>
      <Card recettes={recettes} searchValue={searchValue} showFavoritesOnly={showFavoritesOnly} />
     
      </div>
      <Footer/>
    </>
  );
}

export default App;