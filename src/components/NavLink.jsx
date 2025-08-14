const NavLink = ({ href, title }) => {
  // pasamos 2 parametros para href y el titulo
  return (
    <a
      href={href}
      className="block py-2 text-white sm:text-xl rounded hover:text-blue-500"
    >
      {title}
    </a>
  );
};

export default NavLink;
