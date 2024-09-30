import React, { useState } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import MovieGrid from './MovieGrid';
import Footer from './Footer';


function App() {
  const [selectedTag, setSelectedTag] = useState("Todas"); // Estado para la etiqueta seleccionada
  const API_KEY = '07d20aa2a1eb5c765dd8e8806d94499f'; // Reemplaza con tu API Key

  return (
    <>
      <div className="bg-[#070607] relative w-full h-full">
        <Navbar />
        <Banner apikey={API_KEY} selectedTag={selectedTag} />
        <MovieGrid apikey={API_KEY} setSelectedTag={setSelectedTag} selectedTag={selectedTag} />
        <Footer />
      </div>
    </>
  )
}

export default App
