const NavLink = ({ href, title }) => {
  // pasamos 2 parametros para href y el titulo
  return (
    <a
      href={href}
      className="block py-2 text-white sm:text-xl rounded font-bold hover:text-[#00B3FA] active:scale-90 transition-all ease-in-out"
    >
      {title}
    </a>
  );
};

export default NavLink;
