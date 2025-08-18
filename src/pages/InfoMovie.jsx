import { useEffect, useState } from "react";
import { tmdbBaseUrl, tmdbApiKey } from "../../services/tmdb";
import Loader from "@/utils/loader/Loader";
import { useParams } from "react-router-dom";
import Duration from "../components/Duration";
import { List, Play } from "lucide-react";

const InfoMovie = () => {
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchBanner = async () => {
      setLoading(true);
      const movieUrl = `${tmdbBaseUrl}/movie/${id}?api_key=${tmdbApiKey}&language=es-CO`; // URL para obtener detalles de la película
      try {
        const response = await fetch(movieUrl);
        const movieData = await response.json(); // Convertir la respuesta a JSON
        setMovie(movieData);
        console.log(movieData);
      } catch (error) {
        console.error("Error fetching movie details:", error); // Manejar errores
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
  }, [id]); // Ejecutar cada vez que cambie el id

  const year = movie?.release_date?.slice(0, 4);

  return (
    <div className="w-full h-full flex flex-col justify-center items-start relative overflow-hidden">
      {loading ? (
        <div className="w-full h-[100vh] flex justify-center items-center bg-black/60 z-50">
          <Loader />
        </div>
      ) : (
        <div
          className="w-full h-[100vh] md:h-[728px] bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          }}
        >
          <div className="absolute w-full h-full top-0 left-0 z-30 bg-black-shadow"></div>

          <div className="z-40 px-6 md:px-16 mt-6 flex absolute top-0 left-0">
            {/* info */}
            <div className="flex flex-col gap-4 w-full">
              <h1 className="text-3xl font-bol font-Anton bg-custom-gradient bg-clip-text mb-10 text-transparent">
                CINEVERSE
              </h1>
              <h1 className="w-full text-white text-3xl md:text-4xl font-extrabold uppercase flex flex-col md:flex-row items-start md:items-end gap-2 z-30">
                {movie.title}
                <span className="text-[#ccc]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm-4 4h-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3m-5 0a1 1 0 0 0-1 1v2H8V9a1 1 0 0 0-.883-.993L7 8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-2h1v2a1 1 0 0 0 .883.993L10 16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1m5 2a1 1 0 0 1 1 1v2a1 1 0 0 1-.883.993L15 14z"
                    />
                  </svg>
                </span>
              </h1>
              <div className="flex gap-4 text-lg font-semibold text-white">
                <Duration minutes={movie.runtime} />
                <p className="">{`( ${year} )`}</p>
              </div>
              <p className="text-white text-md">{movie.overview}</p>
              {/* buttons */}
              <div className="flex items-center gap-8 mt-24 text-white font-semibold">
                <button className="group flex items-center gap-2 text-lg px-4 py-2 rounded-md bg-[#051b32] hover:bg-[#041e3a] border border-[#063767] transition-all ease-in-out active:scale-95">
                  <span>
                    <Play className="group-hover:stroke-[#00B3FA]" />
                  </span>
                  Play
                </button>
                <button className="group flex items-center gap-2 text-lg text-nowrap px-4 py-2 rounded-md bg-[#051b32] hover:bg-[#041e3a] border border-[#063767] transition-all ease-in-out active:scale-95">
                  <span>
                    <List className="group-hover:stroke-[#00B3FA]" />
                  </span>
                  Mi lista
                </button>
              </div>
            </div>
            <div className="hidden md:block w-full"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoMovie;
