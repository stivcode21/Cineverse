import { useEffect, useState } from "react";
import { tmdbBaseUrl, tmdbApiKey } from "../../services/tmdb";
import { Link } from "react-router-dom";

const SeriesGrid = ({ selectedSerie }) => {
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
    <div className="grid grid-cols-3 px-8 md:px-16 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-2 lg:gap-4 py-5">
      {series.map((movie) => (
        <Link to={`/serie/${movie.id}`} key={movie.id}>
          <div className="rounded-md group relative shadow-white overflow-hidden border-transparent border-[1px] hover:border-[#00B3FA] hover:scale-[1.02] transition-all ease-in-out">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // URL de la imagen de la película
              alt={movie.title}
              className="w-full h-auto"
            />
            <div className="rounded-md text-white hidden group-hover:block group-hover:bg-radial-darkblue group-hover:bg-opacity-50 w-full h-full items-center absolute top-0 left-0 z-10 p-2"></div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SeriesGrid;
