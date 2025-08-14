import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import NavLink from "./NavLink";
import NavbarMobile from "./NavbarMobile";

const NavLinks = [
  //matriz de enlaces para el componente NavLink
  {
    title: "Inicio",
    path: "#inicio",
  },
  {
    title: "Peliculas",
    path: "#peliculas",
  },
  {
    title: "Series",
    path: "#series",
  },
  {
    title: "Mi Lista",
    path: "#mi-lista",
  },
];

const Navbar = () => {
  const [NavbarOpen, setNavbarOpen] = useState(false); //se inicia en falso

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="flex flex-wrap items-center justify-end md:justify-center w-full px-8 md:px-16 py-2">
        <a
          href={"#main"}
          className="text-white text-3xl font-logo md:text-4x"
        ></a>
        {/* Menu de navegacion en Mobile mediante botton */}
        <div className="mobile-menu md:hidden flex justify-between items-center w-full">
          <div className="relative group w-11 border-2 rounded-md p-1">
            <img src="logoCineverse.png" alt="logo" />
            <div className="absolute left-0 top-0 hidden group-hover:block transition-transform transform duration-600 ease-in-out group-hover:backdrop-blur-sm group-hover:bg-opacity-40 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
                class="size-6"
              >
                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
              </svg>
            </div>
          </div>
          <h1
            className="text-4xl font-bold text-blue-500"
            style={{ fontFamily: "Bebas Neue" }}
          >
            cineverse
          </h1>
          {
            // si el menu no esta abierto, que boton muestra
            !NavbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5"></Bars3Icon>
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5"></XMarkIcon>
              </button>
            )
          }
        </div>
        {/* Menu de navegacion en desktop */}
        <div className="menu hidden md:block md:w-full" id="navbar">
          <ul className="flex md:flex-row justify-center md:space-x-8 relative mt-0">
            <li className="flex items-center">
              <h1
                className="text-4xl font-bold absolute left-0 text-blue-500"
                style={{ fontFamily: "Bebas Neue" }}
              >
                cineverse
              </h1>
            </li>
            {
              // Recorre el array NavLinks.
              // "link" es el elemento actual del array (cada objeto con "title" y "path").
              // "index" es el índice de cada elemento en el array (su posición: 0, 1, 2...).
              NavLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))
            }
            <li className="group absolute right-0 w-11 border-2 rounded-md p-1">
              <img src="logoCineverse.png" alt="logo" />
              <div className="absolute right-0 top-0 hidden group-hover:block transition-transform transform duration-600 ease-in-out group-hover:backdrop-blur-sm group-hover:bg-opacity-40 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  class="size-6"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                  <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* La propiedad que recibe MenuOverlay es un array  */}
      {NavbarOpen ? <NavbarMobile links={NavLinks} /> : null}
    </nav>
  );
};

export default Navbar;
