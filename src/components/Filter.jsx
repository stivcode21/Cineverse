const Filter = ({ selectedTag, setSelectedTag, role }) => {
  const Tags =
    role === "movie"
      ? ["Todas", "Terror", "Comedia", "Romance", "Infantil"]
      : ["Todas", "Comedia", "Ficcion", "Misterio", "Infantil"];

  return (
    <div className="flex flex-col justify-center items-center py-2">
      {Tags.map((tag) => (
        <button
          key={tag}
          className={`mx-2 p-2 text-[12px] md:text-[16px] rounded-sm font-medium hover:text-[#00B3FA] hover:scale-105 transition-all duration-[0.3ms] ease-in-out ${
            selectedTag === tag
              ? "text-[#00B3FA] hover:scale-100"
              : "text-white"
          } text-white`}
          onClick={() => {
            setSelectedTag(tag); // Actualiza la etiqueta seleccionada al hacer clic
          }}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Filter;
