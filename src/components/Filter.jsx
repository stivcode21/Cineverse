const Filter = ({ selectedTag, setSelectedTag, role }) => {
  const Tags =
    role === "movie"
      ? ["Todas", "Terror", "Comedia", "Romance", "Infantil"]
      : ["Todas", "Comedia", "Ficcion", "Misterio", "Infantil"];

  return (
    <div className="flex justify-start items-center py-2 pl-4 md:pl-14 bg-black">
      {Tags.map((tag) => (
        <button
          key={tag}
          className={`mx-2 p-2 text-[12px] md:text-[16px] rounded-sm font-medium hover:bg-blue-500 ${
            selectedTag === tag ? "bg-blue-500" : "bg-gray-900"
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
