import React from 'react';
import { useOutletContext } from 'react-router-dom';
import mistImage from './assets/peter.png';


function ComponentsList() {
    const [isDarkMode] = useOutletContext();
  return (
    <main className="container mx-auto mt-16 px-8 ">
        <div className="flex-1 flex flex-col gap-8 justify-center items-center">
          <img src={mistImage} alt="Mist UI" className={` max-w-full max-h-48 object-contain opacity-3 rounded-lg` }/>
          <h3 > Woring on this page!</h3>
        </div>
        
    </main>
  );
}

export default ComponentsList;