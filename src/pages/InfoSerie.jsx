import { useEffect, useState } from "react";
import { tmdbBaseUrl, tmdbApiKey } from "../../services/tmdb";
import Loader from "@/utils/loader/Loader";
import { useParams } from "react-router-dom";

const InfoSerie = () => {
  const [serie, setSerie] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchBanner = async () => {
      setLoading(true);
      const serieUrl = `${tmdbBaseUrl}/tv/${id}?api_key=${tmdbApiKey}&language=es-CO`; // URL para obtener detalles de la película
      try {
        const response = await fetch(serieUrl);
        const serieData = await response.json(); // Convertir la respuesta a JSON
        setSerie(serieData);
        console.log(serieData);
      } catch (error) {
        console.error("Error fetching movie details:", error); // Manejar errores
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
  }, [id]); // Ejecutar cada vez que cambie el id

  return (
    <div className="w-full h-full flex flex-col justify-center items-start relative">
      {loading ? (
        <div className="absolute top-[300px] left-[50%]">
          <Loader />
        </div>
      ) : (
        <>
          <img
            src={`https://image.tmdb.org/t/p/original${serie.backdrop_path}`}
            alt="Movie Banner"
            width="100%"
            className="h-[80vh] md:h-[570px] object-cover bg-cover "
          />
          <div className="w-full h-full bg-black-shadow z-30 absolute"></div>
        </>
      )}
      <div className="z-50 px-8 md:px-16 -mt-6 flex flex-col gap-2">
        <h1 className="w-[700px] text-white text-3xl font-extrabold uppercase z-30">
          {serie.title}
        </h1>
        <p className="text-white w-[300px] md:w-[900px] text-sm">
          {serie.overview}
        </p>
      </div>
    </div>
  );
};

export default InfoSerie;
