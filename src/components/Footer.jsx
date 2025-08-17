const Footer = () => {
  return (
    <footer className=" text-white py-4 px-8 mt-20">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-2">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" // Logo de TMDB
            alt="Logo de TMDB"
            className="h-6" // Ajusta el tamaño del logo
          />
        </div>
        <p className="text-sm">
          Este producto utiliza la API de{" "}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            The Movie Database
          </a>{" "}
          pero no está asociado ni es financiado por TMDB.
        </p>
        <p className="text-xs mt-2">
          &copy; {new Date().getFullYear()} StivCode. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
