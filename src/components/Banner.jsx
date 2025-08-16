import { useEffect, useState } from "react";
import { tmdbBaseUrl, tmdbApiKey } from "../../services/tmdb";
import Loader from "@/utils/loader/Loader";

// Componente Banner que muestra el banner de una película
const Banner = ({ apikey, selectedTag }) => {
  const [banner, setBanner] = useState(""); // Estado para almacenar la URL del banner
  const [loading, setLoading] = useState(false);

  // Mapa de categorías a IDs de películas
  const categoryIds = {
    Todas: 0, // Usar 0 para todas las películas populares
    Terror: 27,
    Comedia: 35,
    Romance: 10749,
    Infantil: 16,
  };

  // Función para obtener el ID de la película según la categoría
  const getRandomMovieId = async (categoryId) => {
    const apiUrl =
      categoryId === 0
        ? `${tmdbBaseUrl}/movie/popular?api_key=${tmdbApiKey}&language=es-CO&page=1`
        : `${tmdbBaseUrl}/discover/movie?api_key=${tmdbApiKey}&language=es-CO&sort_by=popularity.desc&with_genres=${categoryId}&page=1`;

    try {
      const response = await fetch(apiUrl); // Obtener películas de la API
      const data = await response.json();
      const randomMovie =
        data.results[Math.floor(Math.random() * data.results.length)]; // Elegir una película aleatoria de la lista
      return randomMovie.id; // Retornar el ID de la película seleccionada
    } catch (error) {
      console.error("Error fetching movie:", error); // Manejar errores
      return null; // Retornar null en caso de error
    }
  };

  useEffect(() => {
    const fetchBanner = async () => {
      setLoading(true); // Iniciar el estado de carga
      const categoryId = categoryIds[selectedTag]; // Obtener el ID de la categoría
      const movieId = await getRandomMovieId(categoryId); // Obtener un ID de película aleatorio segun la categoria que este
      if (movieId) {
        const movieUrl = `${tmdbBaseUrl}/movie/${movieId}?api_key=${tmdbApiKey}`; // URL para obtener detalles de la película
        try {
          const response = await fetch(movieUrl); // Hacer la solicitud a la API
          const data = await response.json(); // Convertir la respuesta a JSON
          if (data.backdrop_path) {
            const backdropPath = data.backdrop_path; // Obtener la ruta del banner
            setBanner(`https://image.tmdb.org/t/p/original${backdropPath}`); // Guardar la URL completa del banner
          }
        } catch (error) {
          console.error("Error fetching movie details:", error); // Manejar errores
        }
      }
      setLoading(false); // Finalizar el estado de carga
    };

    fetchBanner();
  }, [selectedTag, apikey]); // Ejecutar cada vez que cambie selectedTag o apikey

  return (
    <div
      id="inicio"
      className="banner w-full h-[680px] flex justify-center items-center relative pt-[20px]"
    >
      {loading ? (
        <Loader />
      ) : (
        <img
          src={banner}
          alt="Movie Banner"
          width="100%"
          className="h-[600px] object-cover bg-cover mt-6"
        />
      )}
    </div>
  );
};

export default Banner;
