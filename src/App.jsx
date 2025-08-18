import { useState } from "react";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import MoviesSection from "./components/MoviesSection";
import SeriesSection from "./components/SeriesSection";

function App() {
  const [selectedMovie, setSelectedMovie] = useState("Todas"); // Estado para la etiqueta seleccionada
  const [selectedSerie, setSelectedSerie] = useState("Todas"); // Estado para la etiqueta seleccionada de series

  return (
    <>
      <div className="font-Bricolage relative">
        <Navbar />
        <Banner />
        <MoviesSection
          setSelectedMovie={setSelectedMovie}
          selectedMovie={selectedMovie}
        />
        <SeriesSection
          selectedSerie={selectedSerie}
          setSelectedSerie={setSelectedSerie}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
