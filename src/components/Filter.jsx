const Filter = ({ selectedTag, setSelectedTag, role, closeList }) => {
  const Tags =
    role === "movie"
      ? ["Todas", "Terror", "Comedia", "Romance", "Infantil"]
      : ["Todas", "Comedia", "Ficcion", "Misterio", "Infantil"];

  const handleTag = (tag) => {
    setSelectedTag(tag);
    closeList(false);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2 pb-2">
      {Tags.map((tag) => (
        <div className="group">
          <button
            key={tag}
            className={` my-[1px] text-[12px] md:text-[14px] rounded-sm font-medium uppercase hover:text-[#00B3FA] hover:scale-105 transition-all duration-[0.3ms] ease-in-out ${
              selectedTag === tag
                ? "text-[#00B3FA] hover:scale-[1]"
                : "text-white"
            }`}
            onClick={() => handleTag(tag)}
          >
            {tag}
          </button>
          {selectedTag === tag ? (
            <span className="mx-auto w-6 h-[0.5px] bg-[#00B3FA] block transition-all ease-in-out"></span>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default Filter;
