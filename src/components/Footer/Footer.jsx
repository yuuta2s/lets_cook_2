import React from 'react';

function Footer() {
  return (
    <>
      
      <img src="src/assets/img/footer.svg" alt="footer" />

    
      <div className="bg-theme1-900 relative ">
      
        <div className="absolute top-0 right-0 cursor-pointer text-white p-4">&times;</div>
        <div className="max-w-screen-md mx-auto px-4 py-8">
          <div className="md:flex items-center justify-between">
            <img src="src/assets/img/download.jpg" alt="" className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-8" />
            <div className="text-white md:w-2/3">
              <h1 className="text-2xl font-bold mb-4">Téléchargez Notre Livre de Recettes Gratuit !</h1>
              <p className="mt-2 mb-4">Plongez dans un monde de saveurs avec notre tout nouveau livre de recettes ! Des entrées succulentes aux desserts irrésistibles, découvrez des recettes exclusives qui émerveilleront vos papilles. Que vous soyez un chef expérimenté ou un novice en cuisine, ce livre est votre passeport pour une aventure culinaire inoubliable. Ne manquez pas cette occasion - votre prochain plat préféré vous attend !</p>
              <button className="bg-white text-red-500 px-4 py-2 rounded-md w-full">Télécharger Maintenant</button>
            </div>
          </div>
        </div>
      </div>

     
      <div className="bg-theme1-900 text-white text-center py-2 w-full">
        <p>© Copyright 2024 Let's Cook</p>
      </div>
    </>
  );
}

export default Footer;