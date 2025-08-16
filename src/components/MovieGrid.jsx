import { useEffect, useState } from "react";
import { tmdbBaseUrl, tmdbApiKey } from "../../services/tmdb";
import Filter from "./Filter";
import ExpandableList from "../utils/expandableList/ExpandableList";
import SplitText from "@/utils/splitText/SplitText";

const MovieGrid = ({ setSelectedMovie, selectedMovie }) => {
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
    <div id="peliculas" className="scroll-mt-20  ">
      <div className="flex justify-between items-center px-8 md:px-16">
        <h1>
          <SplitText
            text="PELICULAS"
            className="font-Anton text-5xl md:text-6xl text-center pt-6 pb-8"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </h1>

        <ExpandableList
          title={"Categoria"}
          index={1}
          description={
            <Filter
              selectedTag={selectedMovie}
              setSelectedTag={setSelectedMovie}
              role={"movie"}
            />
          }
        />
      </div>

      {/* Mostrar las películas en una cuadrícula */}
      <div className="grid grid-cols-3 px-8 md:px-16 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 lg:gap-6 pb-8">
        {movies.map((movie, i) => (
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

export default MovieGrid;
