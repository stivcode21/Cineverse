import React, { useEffect, useState } from 'react';

// Componente Banner que muestra el banner de una película
const Banner = ({ apikey, selectedTag }) => {
    const [banner, setBanner] = useState(''); // Estado para almacenar la URL del banner

    // Mapa de categorías a IDs de películas
    const categoryIds = {
        "Todas": 0, // Usar 0 para todas las películas populares
        "Terror": 27,
        "Comedia": 35,
        "Romance": 10749,
        "Infantil": 16
    };

    // Función para obtener el ID de la película según la categoría
    const getRandomMovieId = async (categoryId) => {
        const apiUrl = categoryId === 0
            ? `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=es-CO&page=1`
            : `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=es-CO&sort_by=popularity.desc&with_genres=${categoryId}&page=1`;

        try {
            const response = await fetch(apiUrl); // Obtener películas de la API
            const data = await response.json();
            const randomMovie = data.results[Math.floor(Math.random() * data.results.length)]; // Elegir una película aleatoria de la lista
            return randomMovie.id; // Retornar el ID de la película seleccionada
        } catch (error) {
            console.error('Error fetching movie:', error); // Manejar errores
            return null; // Retornar null en caso de error
        }
    };

    useEffect(() => {
        const fetchBanner = async () => {
            const categoryId = categoryIds[selectedTag]; // Obtener el ID de la categoría
            const movieId = await getRandomMovieId(categoryId); // Obtener un ID de película aleatorio segun la categoria que este
            if (movieId) {
                const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}`; // URL para obtener detalles de la película
                try {
                    const response = await fetch(movieUrl); // Hacer la solicitud a la API
                    const data = await response.json(); // Convertir la respuesta a JSON
                    if (data.backdrop_path) {
                        const backdropPath = data.backdrop_path; // Obtener la ruta del banner
                        setBanner(`https://image.tmdb.org/t/p/original${backdropPath}`); // Guardar la URL completa del banner
                    }
                } catch (error) {
                    console.error('Error fetching movie details:', error); // Manejar errores
                }
            }
        };

        fetchBanner(); // Llamar a la función para obtener el banner
    }, [selectedTag, apikey]); // Ejecutar cada vez que cambie selectedTag o apikey

    return (
        <div id='inicio' className="banner w-full relative pt-[60px]">
            {banner ? (
                <img src={banner} alt="Movie Banner" width="100%" className='h-[600px] object-cover bg-cover' />
            ) : (
                <p>Cargando...</p> // Mensaje de carga mientras se obtiene el banner
            )}
            <li className="px-2 py-2 bg-[#fff] shadow-lg absolute right-16 bottom-20 rounded-full font-bold text-[#fff] flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#0000ff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
            </li>
        </div>
    );
};

export default Banner;
