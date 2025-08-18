import { useEffect, useState } from "react";
import { tmdbBaseUrl, tmdbApiKey } from "../../services/tmdb";
import Loader from "@/utils/loader/Loader";

const Banner = () => {
  const [movies, setMovies] = useState([]); // Lista de películas populares
  const [currentBanner, setCurrentBanner] = useState(null); // Banner actual
  const [loading, setLoading] = useState(true);

  // Cargar las películas populares
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${tmdbBaseUrl}/movie/popular?api_key=${tmdbApiKey}&language=es-CO&page=1`
        );
        const data = await response.json();
        setMovies(data.results);
        if (data.results?.length > 0) {
          // Mostrar un banner inicial
          const randomMovie =
            data.results[Math.floor(Math.random() * data.results.length)];
          setCurrentBanner(
            `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`
          );
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Cambiar el banner cada 9 segundos
  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      if (randomMovie?.backdrop_path) {
        setCurrentBanner(
          `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`
        );
      }
    }, 9000);

    return () => clearInterval(interval);
  }, [movies]);

  return (
    <div
      id="inicio"
      className="banner w-full h-[680px] flex justify-center items-center relative pt-[20px]"
    >
      {loading ? (
        <Loader />
      ) : (
        <img
          src={currentBanner}
          alt="Movie Banner"
          width="100%"
          className="h-[600px] object-cover bg-cover mt-6 transition-opacity duration-75 ease-in-out"
        />
      )}
    </div>
  );
};

export default Banner;
