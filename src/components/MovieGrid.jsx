import { useEffect, useState } from "react";
import { tmdbBaseUrl, tmdbApiKey } from "../../services/tmdb";
import { Link } from "react-router-dom";

const MovieGrid = ({ selectedMovie }) => {
  const [movies, setMovies] = useState([]);

  // Obtener el ID del género según la etiqueta seleccionada
  const getGenreId = (tag) => {
    const genreMap = {
      Todas: 0,
      Terror: 27,
      Comedia: 35,
      Romance: 10749,
      Infantil: 16,
    };
    return genreMap[tag];
  };

  useEffect(() => {
    const fetchAllMovies = async () => {
      const genreId = getGenreId(selectedMovie);
      let allMovies = [];

      for (let page = 1; page <= 2; page++) {
        const apiUrl =
          genreId === 0
            ? `${tmdbBaseUrl}/movie/popular?api_key=${tmdbApiKey}&language=es-CO&page=${page}`
            : `${tmdbBaseUrl}/discover/movie?api_key=${tmdbApiKey}&language=es-CO&sort_by=popularity.desc&with_genres=${genreId}&page=${page}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        allMovies = [...allMovies, ...data.results];
      }

      setMovies(allMovies.slice(2, 23));
    };

    fetchAllMovies();
  }, [selectedMovie]);

  return (
    <div className="grid grid-cols-3 px-8 md:px-16 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-2 lg:gap-4 pb-8">
      {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
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

export default MovieGrid;
