import { useState } from "react";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import MovieGrid from "@/components/MovieGrid";
import Footer from "@/components/Footer";
import SeriesGrid from "./components/SeriesGrid";

function App() {
  const [selectedMovie, setSelectedMovie] = useState("Todas"); // Estado para la etiqueta seleccionada
  const [selectedSerie, setSelectedSerie] = useState("Todas"); // Estado para la etiqueta seleccionada de series

  return (
    <>
      <div className="bg-[#000000] font-Bricolage relative w-full h-full ">
        <Navbar />
        <Banner selectedTag={selectedMovie} />
        <MovieGrid
          setSelectedMovie={setSelectedMovie}
          selectedMovie={selectedMovie}
        />
        <SeriesGrid
          selectedSerie={selectedSerie}
          setSelectedSerie={setSelectedSerie}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
