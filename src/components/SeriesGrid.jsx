import { useEffect, useState } from "react";
import { tmdbBaseUrl, tmdbApiKey } from "../../services/tmdb";
import Filter from "./Filter";

const SeriesGrid = ({ setSelectedSerie, selectedSerie }) => {
  const [series, setMovies] = useState([]);

  // Obtener el ID del género
  const getGenreId = (tag) => {
    const genreMap = {
      Todas: 0,
      Comedia: 35,
      Ficcion: 10765,
      Misterio: 9648,
      Infantil: 10751,
    };
    return genreMap[tag];
  };

  useEffect(() => {
    const fetchAllSeries = async () => {
      const genreId = getGenreId(selectedSerie);
      let allSeries = [];

      for (let page = 1; page <= 2; page++) {
        const apiUrl =
          genreId === 0
            ? `${tmdbBaseUrl}/tv/popular?api_key=${tmdbApiKey}&language=es-CO&page=${page}`
            : `${tmdbBaseUrl}/discover/tv?api_key=${tmdbApiKey}&language=es-CO&sort_by=popularity.desc&with_genres=${genreId}&page=${page}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        allSeries = [...allSeries, ...data.results];
      }

      setMovies(allSeries.slice(0, 21)); // Guarda solo 21 resultados
    };

    fetchAllSeries();
  }, [selectedSerie]);

  return (
    <div id="series" className="scroll-mt-20">
      <Filter
        selectedTag={selectedSerie}
        setSelectedTag={setSelectedSerie}
        role={"series"}
      />

      {/* Mostrar las películas en una cuadrícula */}
      <div className="grid grid-cols-3 px-8 md:px-16 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 lg:gap-6 bg-black py-5">
        {series.map((movie, i) => (
          <div
            key={i}
            className="rounded-lg group relative shadow-white overflow-hidden"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // URL de la imagen de la película
              alt={movie.title}
              className="w-full h-auto"
            />
            <div className="text-white hidden group-hover:block group-hover:backdrop-blur-sm group-hover:bg-black group-hover:bg-opacity-50 w-full h-full items-center absolute top-0 left-0 z-10 p-2">
              <h2 className="text-lg text-center font-bold">{movie.title}</h2>
              <p className="text-white text-[12px]">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeriesGrid;
