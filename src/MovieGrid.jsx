import React, { useEffect, useState } from 'react';

// Etiquetas de categorías de películas
const MoviesTags = ["Todas", "Terror", "Comedia", "Romance", "Infantil"];

const MovieGrid = ({ apikey, setSelectedTag, selectedTag }) => {
    const [movies, setMovies] = useState([]); // Estado para almacenar las películas

    useEffect(() => {
        const fetchMovies = async () => {
            // Obtener el ID del género correspondiente
            const genreId = getGenreId(selectedTag);
            const apiUrl = genreId === 0
                ? `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=es-CO&page=1`
                : `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=es-CO&sort_by=popularity.desc&with_genres=${genreId}&page=1`;

            try {
                const response = await fetch(apiUrl); // Hacer la solicitud a la API
                const data = await response.json(); // Convertir la respuesta a JSON
                setMovies(data.results); // Actualizar el estado con los resultados
            } catch (error) {
                console.error('Error:', error); // Manejar errores
            }
        };

        fetchMovies(); // Llamar a la función para obtener las películas
    }, [apikey, selectedTag]); // Ejecutar cuando cambien apikey o selectedTag

    return (
        <div id='peliculas'>
            {/* Componente de filtro para seleccionar categorías */}
            <div className="flex justify-start items-center py-2 pl-6 md:pl-14 bg-black">
                {MoviesTags.map(tag => (
                    <button
                        key={tag}
                        className={`mx-2 p-2 hover:bg-blue-500 ${selectedTag === tag ? 'bg-blue-500' : 'bg-gray-900'} text-white`}
                        onClick={() => {
                            setSelectedTag(tag); // Actualiza la etiqueta seleccionada al hacer clic
                        }}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Mostrar las películas en una cuadrícula */}
            <div className="grid grid-cols-2 px-8 md:px-16 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-8 bg-black py-5">
                {movies.map(movie => (
                    <div key={movie.id} className="rounded-lg group relative shadow-white overflow-hidden">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // URL de la imagen de la película
                            alt={movie.title} // Texto alternativo
                            className="w-full h-auto"
                        />
                        <div className='text-white hidden group-hover:block group-hover:backdrop-blur-sm group-hover:bg-black group-hover:bg-opacity-50 w-full h-full items-center absolute top-0 left-0 z-10 p-2'>
                            <h2 className="text-lg text-center font-bold">{movie.title}</h2>
                            <p className="text-white text-[12px]">{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Función para obtener el ID del género según la etiqueta seleccionada
const getGenreId = (tag) => {
    const genreMap = {
        "Todas": 0, // Usar 0 para todas las películas populares
        "Terror": 27,
        "Comedia": 35,
        "Romance": 10749,
        "Infantil": 16
    };
    return genreMap[tag]; // Retorna el ID del género correspondiente
};

export default MovieGrid;
